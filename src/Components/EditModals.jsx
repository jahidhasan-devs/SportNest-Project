import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  TextArea,
  TextField,
} from "@heroui/react";
import { FiEdit2 } from "react-icons/fi";

const EditModals = ({ facility }) => {
  return (
    <Modal>
      <Button
        isIconOnly
        color="primary"
        radius="full"
        variant="flat"
        className="bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
      >
        <FiEdit2 size={18} />
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-3xl rounded-3xl">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading className="text-2xl font-bold">
                Update Facility
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body>
              <form className="space-y-6">
                {/* Facility Name (Full Width) */}
                <TextField
                  defaultValue={facility?.facilityName}
                  name="facilityName"
                  isRequired
                >
                  <Label>Facility Name</Label>
                  <Input placeholder="Football Ground" />
                  <FieldError />
                </TextField>

                {/* Grid Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <TextField
                    defaultValue={facility?.facilityType}
                    name="facilityType"
                    isRequired
                  >
                    <Label>Facility Type</Label>
                    <Input placeholder="Football" />
                    <FieldError />
                  </TextField>

                  <TextField
                    defaultValue={facility?.image}
                    name="image"
                    isRequired
                  >
                    <Label>Image URL</Label>
                    <Input placeholder="https://example.com/image.jpg" />
                    <FieldError />
                  </TextField>

                  <TextField
                    defaultValue={facility?.location}
                    name="location"
                    isRequired
                  >
                    <Label>Location</Label>
                    <Input placeholder="Dhaka" />
                    <FieldError />
                  </TextField>

                  <TextField
                    defaultValue={facility?.pricePerHour}
                    name="pricePerHour"
                    isRequired
                  >
                    <Label>Price Per Hour</Label>
                    <Input type="number" />
                    <FieldError />
                  </TextField>

                  <TextField
                    defaultValue={facility?.capacity}
                    name="capacity"
                    isRequired
                  >
                    <Label>Capacity</Label>
                    <Input type="number" />
                    <FieldError />
                  </TextField>

                  <TextField
                    defaultValue={facility?.availableTimeSlots}
                    name="availableTimeSlots"
                    isRequired
                  >
                    <Label>Available Time Slots</Label>
                    <Input placeholder="8 AM - 10 AM" />
                    <FieldError />
                  </TextField>
                </div>

                {/* Description (Full Width) */}
                <TextField
                  defaultValue={facility?.description}
                  name="description"
                  isRequired
                >
                  <Label>Description</Label>

                  <TextArea
                    placeholder="Write facility description..."
                    className="min-h-22"
                  />

                  <FieldError />
                </TextField>

                <Modal.Footer>
                  <Button slot="close" variant="ghost">
                    Cancel
                  </Button>

                  <Button color="primary" type="submit">
                    Update Facility
                  </Button>
                </Modal.Footer>
              </form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditModals;
