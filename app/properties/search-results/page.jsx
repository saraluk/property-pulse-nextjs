import React from "react";
import Property from "@/models/Property";
import connectDB from "@/config/database";
import { convertToSerializableObject } from "@/utils/convertToObject";

export default async function SearchResultsPage({
  searchParams: { location, propertyType },
}) {
  await connectDB();
  const locationPattern = new RegExp(location, "i");
  let query = {
    $or: [
      { name: locationPattern },
      { description: locationPattern },
      { "location.street": locationPattern },
      { "location.city": locationPattern },
      { "location.state": locationPattern },
      { "location.zip": locationPattern },
    ],
  };

  if (propertyType && propertyType !== "All") {
    const typePattern = new RegExp(propertyType, "i");
    query.type = typePattern;
  }

  const propertiesQueryResults = await Property.find(query).lean();
  const properties = convertToSerializableObject(propertiesQueryResults);

  return <div>SearchResults</div>;
}
