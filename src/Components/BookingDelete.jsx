"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";

export function BookingDeletePage({ booking }) {
   const bookingId=booking._id
  const handleCancleBooking=async()=>{
     const { data: tokenData } = await authClient.token();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URI}/booking/${bookingId}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${tokenData.token}`,
          "content-type": "application/json",
        },
      },
    );
    const deleteData=await res.json()
    window.location.reload();
  }

  return (
    <AlertDialog>
      <Button variant="danger"> Cancel Booking</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Cancel {booking.facilityType} permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently cancel{" "}
                <strong>{booking.facilityType}</strong> and all of its data.
                This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                onClick={handleCancleBooking}
                slot="close"
                variant="danger"
              >
                Cancel Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}

