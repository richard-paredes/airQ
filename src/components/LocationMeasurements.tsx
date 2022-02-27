import React from 'react';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useColorMode } from "@chakra-ui/react"
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    TimeSeriesScale
} from 'chart.js';
import 'chartjs-adapter-moment';
import { Line } from 'react-chartjs-2';

import { IOpenAQParameters } from '../reducers/OpenAQReducer';
import { useMeasurements } from '../hooks/useMeasurements';

interface LocationMeasurementProps {
    openAQParameters: IOpenAQParameters;
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

ChartJS.register(TimeSeriesScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export const LocationMeasurements: React.FC<LocationMeasurementProps> = ({ openAQParameters, show, setShow }) => {
    const { colorMode } = useColorMode();
    const { selectedLocation } = openAQParameters;
    const measurements = useMeasurements(selectedLocation);
    const onClose = () => setShow(false);

    const data = React.useMemo(() => {
        return {
            datasets: [
                {
                    label: 'Measurements',
                    data: measurements.map(measurement => ({
                        x: new Date(measurement.date.utc),
                        y: measurement.value
                    })),
                    backgroundColor: 'teal',
                },
            ],
        }
    }, [measurements]);

    const options = React.useMemo(() => {
        const labelColor = colorMode === "dark" ? "white" : "black";
        return {
            scales: {
                x: {
                    axis: "x",
                    type: "time",
                    ticks: {
                        color: labelColor
                    },
                    title: {
                        display: true,
                        color: labelColor,
                        text: "Time",
                    }
                },
                y: {
                    axis: "y",
                    ticks: {
                        color: labelColor,
                    },
                    title: {
                        display: true,
                        color: labelColor,
                        text: "Value (µg/m³)",
                    }
                }
            },
            color: labelColor
        }
    }, [colorMode]);

    if (!selectedLocation) return null;

    return <Modal isOpen={show} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>{selectedLocation.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Line options={options as any} data={data} />
            </ModalBody>
            <ModalFooter>
                <Button mr={3} onClick={onClose}>
                    Close
                </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
}