import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabDetails = () => {
  return (
    <div className='my-12 max-w-7xl mx-auto  '>
     


      <Tabs>
        <div className='bg-gray-200 p-4 flex'>
          <TabList className='mx-auto flex space-x-4'>
            <Tab className='hover:border-b-2 hover:border-red-500 px-4 py-2 cursor-pointer text-2xl'>Description</Tab>
            <Tab className='hover:border-b-2 hover:border-red-500 px-4 py-2 cursor-pointer text-2xl'>Reviews</Tab>
          </TabList>
        </div>

        <TabPanel  >
           <div className='max-w-6xl flex items-center justify-center'>
               <div className='mx-auto'>

                   <p className='text-justify text-xl mx-4 my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolore quo dignissimos id esse! Sit, doloribus? Reiciendis numquam, modi doloribus expedita sequi animi quam quibusdam voluptatibus debitis delectus aliquam distinctio officiis dolor nesciunt libero aut asperiores quisquam reprehenderit in exercitationem cumque saepe! Eum ducimus laborum libero, mollitia corporis quis soluta consequatur consequuntur consectetur excepturi assumenda quae veniam nemo vitae explicabo quidem? Sint ex optio enim error iure, earum, aliquam ipsam inventore sequi repellendus nemo, quo maxime quia et modi velit sed tempora. Eos cupiditate inventore, sequi consequuntur laudantium fuga ipsum optio labore sed quia, ipsam facilis accusamus odio ullam quis beatae voluptates dolorum aperiam velit tempora deserunt. Porro inventore ipsum magni, corrupti repellendus, delectus, non omnis fugit velit minima eligendi a accusantium at ducimus. Reprehenderit perspiciatis expedita doloremque illo iusto nobis veritatis a ab dicta provident accusamus repudiandae iste aliquam mollitia harum, quia, debitis, odit ad alias assumenda <br /> <span className='mt-2'>  incidunt atque possimus! Possimus, distinctio obcaecati optio facilis qui accusantium corrupti aut quas officiis autem nihil harum et sequi magni modi tenetur, culpa consectetur est fugiat ex amet neque dignissimos sit unde. Incidunt voluptatem nisi iure reiciendis. Molestias a harum hic, culpa unde, debitis earum eveniet laborum modi tenetur illo. Corporis quae placeat fugit quod error recusandae. Suscipit, nulla? Esse distinctio maiores architecto quae repudiandae, provident est rerum excepturi officiis quas omnis ut alias ipsa nisi. Deleniti quis atque, dignissimos molestias, officia nostrum minima fuga, nemo fugiat inventore laudantium? Corporis modi voluptate, saepe quod ipsam quasi vitae eum necessitatibus voluptatem eveniet magni qui iusto adipisci ratione accusantium beatae error repudiandae ex fugiat harum, temporibus eius debitis laboriosam itaque? Esse nobis mollitia veritatis. Ratione quisquam atque laborum, nihil provident explicabo ipsum molestias recusandae laboriosam. Quaerat reiciendis alias officia corporis </span>  vel recusandae impedit delectus, ullam officiis qui quam maxime tempora fuga soluta dolor incidunt atque possimus deserunt saepe voluptates a repellat odio ut. Vero earum, at consectetur optio odit officia ipsum mollitia ab illum suscipit libero voluptatum quae dicta tempora necessitatibus exercitationem, id vel dolor, doloribus doloremque perspiciatis et natus accusantium nesciunt. Iste culpa reiciendis a. Modi officia magni ea repellendus, vero asperiores nemo quam, iste assumenda quidem possimus sit dolores totam. Dignissimos non praesentium dolores, in est nesciunt facilis itaque? Rerum ullam voluptatibus aspernatur, ratione repellat, odio vero eius assumenda laboriosam labore, quidem necessitatibus! Pariatur tempore, enim quisquam ea numquam nobis itaque, deleniti quae inventore corporis aliquid. Quaerat libero voluptatibus accusamus expedita provident.</p>
               </div>
           </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>

    </div>
  );
};

export default TabDetails;