import React from 'react';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"

import { IOpenAQParameters } from '../reducers/OpenAQReducer';
import { useMeasurements } from '../hooks/useMeasurements';

interface LocationMeasurementProps {
    openAQParameters: IOpenAQParameters;
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LocationMeasurements: React.FC<LocationMeasurementProps> = ({ openAQParameters, show, setShow }) => {
    const { selectedLocation } = openAQParameters;
    const measurements = useMeasurements(selectedLocation);
    const onClose = () => setShow(false);

    if (!selectedLocation) return null;
    console.log(measurements);
    return <Modal isOpen={show} onClose={onClose} useInert>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>{selectedLocation.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                Hi
            </ModalBody>

            <ModalFooter>
                <Button mr={3} onClick={onClose}>
                    Close
                </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
}