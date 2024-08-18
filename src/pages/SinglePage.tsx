import { useParams } from "react-router-dom";

//components
import PagesHeader from "@/components/PagesHeader/PagesHeader";
import SingleProduct from "@/components/SingleProduct/SingleProduct";
//types
import { TServices } from "@/utils/types/types";
//data
import { services } from "@/utils/services";

export default function SinglePage() {
  const { id } = useParams();

  const service = services.find(
    (service: TServices) => service.id === Number(id)
  );

  console.log(service);

  return (
    <>
      <PagesHeader title={service?.title || ""} />
      <SingleProduct
        subtitle={service!.subtitle}
        thumbnail={service!.thumbnail}
        thumbnails={service!.thumbnails}
        description={service!.description}
      />
    </>
  );
}
