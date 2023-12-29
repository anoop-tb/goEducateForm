"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { callInstitutionDetails } from "@/network/callInstitutionDetails";
import Loader from "@/components/Loader/Loader";
import EmptyPage from "@/app/not-found";
import InstitutionDetails from "@/components/InstitutionDetails/InstitutionDetails";

const InstitutionPage = ({ params }) => {
  const [institutionDetails, setInstitution] = useState();
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  const getInstitutionDetails = async () => {
    setInstitution(await callInstitutionDetails(params?.Institution));
  };

  useEffect(() => {
    setLoading(true);
    if (params?.Institution) {
      getInstitutionDetails();
      setLoading(false);
    } else {
      router.replace("/");
      setLoading(false);
    }
  }, []);

  return isLoading ? (
    <Loader />
  ) : institutionDetails && Object.keys(institutionDetails).length > 0 ? (
    <InstitutionDetails
      description={institutionDetails?.body}
      title={institutionDetails?.title}
    />
  ) : (
    <EmptyPage />
  );
};

export default InstitutionPage;
