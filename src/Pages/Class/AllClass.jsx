import React, { useEffect, useState } from 'react';
import useClassCard from '../../Hooks/useClassCard';
import ClassCard from './ClassCard';
import Loading from '../../Common/Loading';
import useAxiosPublic from '../../Hooks/useAxiosPublic';


const AllClass = () => {
  const [search ,setSearch] = useState('');
  const [sort, setSort] = useState('sort by price')
  const [filter, setFilter] = useState('')
  const [classes, setClasses] = useState([]);
  const axiosPublic = useAxiosPublic()

    useEffect(() => {
      const getClasses = async () => {
        const {data} = await axiosPublic.get(`/classes?search=${search}&sort=${sort}&filter=${filter}`);
        setClasses(data)
      }
      getClasses()
    } , [search,sort,filter])

    const approvedClasses = classes.filter(Class => Class.status == 'approved')

    const handleResetBtn = () => {
        setSearch('')
        setSort('sort by price')
        setFilter('')
    }


    



     


            
   
            return (
        <div className='All_classes my-30'>
                {/* <h1>         total claass  :{approvedClasses.length} </h1> */}

                    <div className='my-6 flex gap-x-4 items-center'>

                          <div className="filter_course">
                     <fieldset className="fieldset">
  <select value={filter} className="select" onChange={e => setFilter(e.target.value)}>
  <option disabled={true}>filter by catagory</option>
  <option value='frontend development' >frontend development </option>
  <option value='web design' >web design</option>
  <option value='video editing' >video editing </option>
  <option value='professional vedio editing' >professional vedio editing </option>
  <option value='digital marketing' >digital marketing</option>
  <option value='professional digital marketing' >professional digital marketing </option>
  <option value='data entry' >data entry</option>

   
  </select>

</fieldset>
                     </div>

                    <div className="search_course">
                     <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
  <input type="search" required placeholder="Search"  onChange={e => setSearch(e.target.value)} value={search}/>
</label>
                     </div>

                     <div className="sort_course">
                     <fieldset className="fieldset">
  <select value={sort} className="select" onChange={e => setSort(e.target.value)}>
  <option disabled={true}>sort by price</option>
    <option value='asc'>sort by asscending</option>
    <option value='dsc'>sort by dessending</option>
  </select>

</fieldset>
                     </div>
                     <div className="btn" onClick={handleResetBtn}>reset</div>
                    </div>


                    {/* <Tabs className='my-10 text-center' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>


                    <TabList>
      <Tab></Tab>
      <Tab>frontend_development</Tab>
      <Tab>web_design</Tab>
      <Tab>video_editing</Tab>
      <Tab>professional_vedio_editing</Tab>
      <Tab>digital_marketing</Tab>
      <Tab>professional_digital_marketing</Tab>
      <Tab>data_entry</Tab>
    </TabList>

     <TabPanel>
                 <Class_Catagory_tab class_catagory={frontend_development}></Class_Catagory_tab>
        </TabPanel>

     <TabPanel>
                 <Class_Catagory_tab class_catagory={web_design}></Class_Catagory_tab>
        </TabPanel>

     <TabPanel>
                 <Class_Catagory_tab class_catagory={video_editing}></Class_Catagory_tab>
        </TabPanel>

     <TabPanel>
                 <Class_Catagory_tab class_catagory={professional_vedio_editing}></Class_Catagory_tab>
        </TabPanel>

     <TabPanel>
                 <Class_Catagory_tab class_catagory={digital_marketing}></Class_Catagory_tab>
        </TabPanel>

     <TabPanel>
                 <Class_Catagory_tab class_catagory={professional_digital_marketing}></Class_Catagory_tab>
        </TabPanel>

     <TabPanel>
                 <Class_Catagory_tab class_catagory={data_entry}></Class_Catagory_tab>
        </TabPanel>

                    </Tabs> */}


           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 '>
                      {
                        approvedClasses.map((appProvedClass,index) => <ClassCard key={index} approvedClass ={appProvedClass}></ClassCard>)
                      }
                </div> 
            
        </div>
    );
};

export default AllClass;