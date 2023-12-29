"use client";
import React, { useState } from "react";
import FormInputContainer from "./FormInputContainer";
import FormConfirmationModal from "./FormConfirmationModal";
import FormDialogBox from "./FormDialogBox";

const FormComponent = () => {
  const [formData, SetFormData] = useState();
  const [resetForm, setResetForm] = useState();
  const [openConfirmationModal, setConfirmationModal] = useState(false);
  const [openDialogBox, setDialogBoxOpen] = useState(false);

  const handleModalOpen = () => setConfirmationModal(true);
  const handleModalClose = () => setConfirmationModal(false);

  const handleDialogBoxOpen = () => setDialogBoxOpen(true);
  const handleDialogBoxClose = () => setDialogBoxOpen(false);

  const handleDialogBoxSubmit = () => {
    setDialogBoxOpen(false);
    handleModalOpen();
    setResetForm(true);
  };

  return (
    <>
      <FormInputContainer
        handleDialogBoxOpen={handleDialogBoxOpen}
        SetFormData={SetFormData}
        resetForm={resetForm}
        setResetForm={setResetForm}
      />

      <FormConfirmationModal
        openConfirmationModal={openConfirmationModal}
        handleModalClose={handleModalClose}
        schoolName={formData?.schoolName}
      />

      <FormDialogBox
        openDialogBox={openDialogBox}
        handleDialogBoxClose={handleDialogBoxClose}
        handleDialogBoxSubmit={handleDialogBoxSubmit}
      />
    </>
  );
};

export default FormComponent;
