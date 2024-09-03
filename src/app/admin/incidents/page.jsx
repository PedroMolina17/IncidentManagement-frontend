"use client";
import CreateButton from "../components/CreateButton";
import SearchInput from "../components/SearchInput";
import { useGetAllIncidents } from "../../hooks/useIncidents.js";
import Image from "next/image";
const Incidents = () => {
  const { data: dataIncidents } = useGetAllIncidents();
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex">
          <SearchInput />
        </div>
        <CreateButton href={"/admin/incidents/create"} />
      </div>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {dataIncidents?.map((incident) => (
            <tr key={incident.incidents_id}>
              <th>
                {incident.image_cover.length > 0 && (
                  <Image
                    width={100}
                    height={100}
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${incident.image_cover[0].img_url}`}
                    alt={incident.description}
                  />
                )}
              </th>
              <th> {incident.description}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Incidents;
