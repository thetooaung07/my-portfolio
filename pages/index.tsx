import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { IService } from "../types";

const index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum alias
        dignissimos corrupti sit quas, culpa doloribus amet explicabo veniam
        molestias. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Adipisci, fugiat. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Cupiditate voluptatum dolores quasi
        itaque ullam omnis architecto dolorum dignissimos accusantium.
      </h5>

      <div
        className="flex-grow p-4 mt-5 bg-gray-400 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-200 rounded-lg lg:col-span-1"
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;

// export const getServerSideProps = async (context:GetServerSidePropsContext) => {

//   // Serverside working

//   const res = await fetch('http://localhost:3000/api/services');
//   const data = await res.json();

//   console.log("Server : " , data.services);

//   return {
//     props: {
//       services: data.services
//     }
//   }
// }

// export const getStaticProps = async (context:GetStaticPropsContext) => {

//   // Serverside working

//   const res = await fetch('http://localhost:3000/api/services');
//   const data = await res.json();

//   console.log("" , data.services.Icon);

//   return {
//     props: {
//       services: data.services
//     }
//   }
// }
