import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// components
import PagesHeader from "@/components/PagesHeader/PagesHeader";
import SingleProduct from "@/components/SingleProduct/SingleProduct";

// types
import { TServices } from "@/utils/types/types";
// data
import { services } from "@/utils/services";

export default function SinglePage() {
  const { id } = useParams<{ id: string }>();

  // Find the specific service based on the URL ID
  const service = services.find((item: TServices) => item.id === Number(id));

  // Safety: If the ID doesn't exist in your data, redirect to projects or show a message
  if (!service) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <Helmet>
        <title>Adonay D'agosto | {service.title}</title>
        <meta
          name="description"
          content={`${service.title}: ${service.description.substring(0, 150)}...`}
        />
      </Helmet>

      {/* Hero section for the specific project */}
      <PagesHeader title={service.title} secondaryTitle={service.subtitle} />

      {/* Using the container-sized class if needed, or letting the component handle it */}
      <div className="container-sized">
        <SingleProduct
          subtitle={service.subtitle}
          thumbnail={service.thumbnail}
          thumbnails={service.thumbnails}
          description={service.description}
        />
      </div>
    </>
  );
}
