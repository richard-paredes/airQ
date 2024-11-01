import { NextApiHandler } from "next";
import { V3Client, Measurement } from "../../openapi/openaq";


const measurementsHandler: NextApiHandler<Measurement[]> = async (req, res) => {
    if (req.method !== "GET") {
        res.status(404);
        return;
    }

    const measurementsParameters = { ...req.query };

    if (!measurementsParameters || !measurementsParameters.locationId) {
        res.status(200).json([]);
        return;
    }

    // const measurementsResponse = await V3Client.sensorMeasurementsAggregatedGetDailyV3SensorsSensorsIdMeasurementsDailyGet(measurementsParameters);
    // res.status(200).json(measurementsResponse.results ?? []);
    res.status(404).json([]);
    return;
}

export default measurementsHandler;