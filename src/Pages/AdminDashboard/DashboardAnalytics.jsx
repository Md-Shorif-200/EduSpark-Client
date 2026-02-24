import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Loading from '../../Common/Loading';
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  AreaChart, Area,
} from 'recharts';
import {
  FiUsers, FiBookOpen, FiClock,
  FiDollarSign, FiUserCheck, FiStar,
  FiRefreshCw, FiShoppingBag,
} from 'react-icons/fi';

const INDIGO_PALETTE = ['#6366f1', '#818cf8', '#a5b4fc', '#c7d2fe', '#4f46e5', '#4338ca'];

const CHART_COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#14b8a6'];

const formatCategory = (cat) =>
  cat?.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()) || 'Other';

const ChartTooltip = ({ active, payload, isCurrency }) => {
  if (!active || !payload?.length) return null;
  const { name } = payload[0].payload;
  const val = payload[0].value;
  return (
    <div className="bg-white px-4 py-2.5 rounded-xl shadow-lg border border-gray-100 text-sm">
      <p className="font-semibold text-gray-800">{name}</p>
      <p className="text-indigo-600 font-medium">
        {isCurrency ? `$${val.toLocaleString()}` : val.toLocaleString()}
      </p>
    </div>
  );
};

const pieLabel = ({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`;

const DashboardAnalytics = () => {
  const axiosSecure = useAxiosSecure();

  const REFETCH_MS = 30_000;

  const {
    data: users = [],
    isLoading: l1,
    refetch: r1,
  } = useQuery({
    queryKey: ['admin-analytics-users'],
    queryFn: async () => (await axiosSecure.get('/users')).data,
    refetchInterval: REFETCH_MS,
  });

  const {
    data: classes = [],
    isLoading: l2,
    refetch: r2,
  } = useQuery({
    queryKey: ['admin-analytics-classes'],
    queryFn: async () => (await axiosSecure.get('/classes')).data,
    refetchInterval: REFETCH_MS,
  });

  const {
    data: payments = [],
    isLoading: l3,
    refetch: r3,
  } = useQuery({
    queryKey: ['admin-analytics-payments'],
    queryFn: async () => (await axiosSecure.get('/payments')).data,
    refetchInterval: REFETCH_MS,
  });

  const {
    data: feedback = [],
    isLoading: l4,
    refetch: r4,
  } = useQuery({
    queryKey: ['admin-analytics-feedback'],
    queryFn: async () => {
      try {
        return (await axiosSecure.get('/feedback')).data;
      } catch {
        return [];
      }
    },
    refetchInterval: REFETCH_MS,
  });

  const refreshAll = () => {
    r1();
    r2();
    r3();
    r4();
  };

  if (l1 || l2 || l3 || l4) return <Loading />;

  // ── derived counts ──
  const teachers = users.filter((u) => u.role === 'teacher');
  const students = users.filter((u) => u.role === 'student');
  const admins = users.filter((u) => u.role === 'admin');
  const pendingTeachers = users.filter((u) => u.status === 'pending');

  const approvedClasses = classes.filter((c) => c.status === 'approved');
  const pendingClasses = classes.filter((c) => c.status === 'pending');


  const totalRevenue = payments.reduce((s, p) => s + (Number(p.courseFee) || 0), 0);
  const totalEnrollments = payments.length;
  const avgRating =
    feedback.length > 0
      ? (feedback.reduce((s, f) => s + (Number(f.feedbackStar) || 0), 0) / feedback.length).toFixed(1)
      : '0.0';
  const pendingTotal = pendingClasses.length + pendingTeachers.length;

  // ── stat cards data ──
  const stats = [
    { label: 'Total Users', value: users.length, icon: FiUsers, bg: 'bg-indigo-50', text: 'text-indigo-600', ring: 'ring-indigo-100' },
    { label: 'Total Classes', value: classes.length, icon: FiBookOpen, bg: 'bg-emerald-50', text: 'text-emerald-600', ring: 'ring-emerald-100' },
    { label: 'Enrollments', value: totalEnrollments, icon: FiShoppingBag, bg: 'bg-violet-50', text: 'text-violet-600', ring: 'ring-violet-100' },
    { label: 'Teachers', value: teachers.length, icon: FiUserCheck, bg: 'bg-cyan-50', text: 'text-cyan-600', ring: 'ring-cyan-100' },
    { label: 'Avg Rating', value: `${avgRating} ★`, icon: FiStar, bg: 'bg-amber-50', text: 'text-amber-600', ring: 'ring-amber-100' },
    { label: 'Pending', value: pendingTotal, icon: FiClock, bg: 'bg-rose-50', text: 'text-rose-600', ring: 'ring-rose-100' },
  ];

  // ── chart data ──
  const roleData = [
    { name: 'Admin', value: admins.length },
    { name: 'Teacher', value: teachers.length },
    { name: 'Student', value: students.length },
  ].filter((d) => d.value > 0);


  const revCatMap = {};
  payments.forEach((p) => {
    const cls = classes.find((c) => c._id === p.paymentId);
    const cat = formatCategory(cls?.category);
    revCatMap[cat] = (revCatMap[cat] || 0) + (Number(p.courseFee) || 0);
  });
  const revenueByCategory = Object.entries(revCatMap)
    .map(([name, revenue]) => ({ name, revenue }))
    .sort((a, b) => b.revenue - a.revenue);

  const enrollMap = {};
  payments.forEach((p) => {
    const title = p.courseTitle || 'Unknown';
    enrollMap[title] = (enrollMap[title] || 0) + 1;
  });
  const topCourses = Object.entries(enrollMap)
    .map(([name, enrollments]) => ({ name: name.length > 22 ? name.slice(0, 22) + '…' : name, enrollments }))
    .sort((a, b) => b.enrollments - a.enrollments)
    .slice(0, 6);

  const monthMap = {};
  payments.forEach((p) => {
    const d = new Date(p.date);
    if (isNaN(d)) return;
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    const name = d.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
    if (!monthMap[key]) monthMap[key] = { key, name, revenue: 0, enrollments: 0 };
    monthMap[key].revenue += Number(p.courseFee) || 0;
    monthMap[key].enrollments += 1;
  });
  const monthlyTrend = Object.values(monthMap).sort((a, b) => a.key.localeCompare(b.key));


  // ── common axis/grid styling ──
  const axisStyle = { fontSize: 12, fill: '#64748b' };
  const gridStroke = '#f1f5f9';

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Analytics</h1>
          <p className="text-sm text-gray-500 mt-1">Real-time overview of your platform</p>
        </div>
        <button
          onClick={refreshAll}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-xl hover:bg-indigo-700 active:scale-95 transition-all shadow-sm shadow-indigo-200 cursor-pointer self-start"
        >
          <FiRefreshCw size={16} />
          Refresh Data
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col gap-3 hover:shadow-md transition-shadow"
          >
            <div className={`w-10 h-10 rounded-xl ${s.bg} ${s.text} ring-4 ${s.ring} flex items-center justify-center`}>
              <s.icon size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{s.label}</p>
              <p className="text-2xl font-bold text-gray-900 mt-0.5">{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Revenue Banner */}
      <div className="bg-linear-to-r from-indigo-600 via-indigo-500 to-violet-600 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg shadow-indigo-200/40">
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-xl bg-white/20 backdrop-blur-sm">
            <FiDollarSign size={28} className="text-white" />
          </div>
          <div>
            <p className="text-indigo-100 text-sm font-medium">Total Collected Revenue</p>
            <p className="text-3xl font-bold text-white">${totalRevenue.toLocaleString()}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <span className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full font-medium">
            {totalEnrollments} enrollments
          </span>
          <span className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full font-medium">
            {approvedClasses.length} live classes
          </span>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="User Roles Distribution" subtitle="Breakdown of platform users by role">
          {roleData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={roleData} cx="50%" cy="50%" innerRadius={65} outerRadius={110} paddingAngle={4} dataKey="value" label={pieLabel}>
                  {roleData.map((_, i) => (
                    <Cell key={i} fill={INDIGO_PALETTE[i % INDIGO_PALETTE.length]} />
                  ))}
                </Pie>
                <Tooltip content={<ChartTooltip />} />
                <Legend verticalAlign="bottom" iconType="circle" iconSize={10} formatter={(v) => <span className="text-sm text-gray-600 ml-1">{v}</span>} />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <EmptyState />
          )}
        </ChartCard>

        <ChartCard title="Top Enrolled Courses" subtitle="Most popular courses by enrollment count">
          {topCourses.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topCourses} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} horizontal={false} />
                <XAxis type="number" tick={axisStyle} axisLine={false} tickLine={false} allowDecimals={false} />
                <YAxis type="category" dataKey="name" tick={axisStyle} axisLine={false} tickLine={false} width={140} />
                <Tooltip content={<ChartTooltip />} />
                <Bar dataKey="enrollments" radius={[0, 8, 8, 0]} maxBarSize={28} fill="#6366f1" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <EmptyState msg="No enrollment data yet" />
          )}
        </ChartCard>
      </div>

      {/* Area Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Revenue by Category" subtitle="Total collected revenue per category">
          {revenueByCategory.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueByCategory} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
                <XAxis dataKey="name" tick={axisStyle} axisLine={{ stroke: '#e2e8f0' }} tickLine={false} interval={0} angle={-15} textAnchor="end" height={60} />
                <YAxis tick={axisStyle} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}`} />
                <Tooltip content={<ChartTooltip isCurrency />} />
                <Bar dataKey="revenue" radius={[8, 8, 0, 0]} maxBarSize={50}>
                  {revenueByCategory.map((_, i) => (
                    <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <EmptyState msg="No revenue data yet" />
          )}
        </ChartCard>

        <ChartCard title="Monthly Revenue Trend" subtitle="Revenue collected over time">
          {monthlyTrend.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyTrend} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <defs>
                  <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
                <XAxis dataKey="name" tick={axisStyle} axisLine={{ stroke: '#e2e8f0' }} tickLine={false} />
                <YAxis tick={axisStyle} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}`} />
                <Tooltip content={<ChartTooltip isCurrency />} />
                <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2.5} fill="url(#revGrad)" dot={{ fill: '#6366f1', r: 4, strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6, strokeWidth: 2 }} />
              </AreaChart>
            </ResponsiveContainer>
          ) : (
            <EmptyState msg="No monthly data yet" />
          )}
        </ChartCard>
      </div>

    </div>
  );
};

// ── small reusable wrappers ──

const ChartCard = ({ title, subtitle, children }) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-0.5">{title}</h3>
    <p className="text-sm text-gray-500 mb-4">{subtitle}</p>
    {children}
  </div>
);

const EmptyState = ({ msg = 'No data available' }) => (
  <p className="text-center text-gray-400 py-20 text-sm">{msg}</p>
);

export default DashboardAnalytics;
