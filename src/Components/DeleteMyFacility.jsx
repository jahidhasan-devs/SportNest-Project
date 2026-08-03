"use client"

import { AlertDialog, Button } from "@heroui/react";
import { FiTrash2} from "react-icons/fi";

export function DeleteMyAddFacility({ facilityId }) {


  const handleDeleteModal =async () => {
   const res = await fetch( `http://localhost:5000/facility/${facilityId}`,{

    method:"DELETE",   
    headers:{
    contentype:"application/json"
   }
   } );
   const deleteData=await res.json();
   console.log("deleteData",deleteData)

  };

  return (
    <AlertDialog>
      <Button
        isIconOnly
        color="danger"
        radius="full"
        variant="flat"
        className=" bg-red-100 text-red-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1"
      >
        <FiTrash2 size={18} />
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete facility permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>Your facility</strong> and
                all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDeleteModal} slot="close" variant="danger">
                Delete Facility
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}

