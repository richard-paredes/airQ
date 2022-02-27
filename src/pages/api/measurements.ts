import { NextApiHandler } from "next";
import { V2Client, V2MeasurementsResponse } from "../../openapi/openaq";


const measurementsHandler: NextApiHandler<V2MeasurementsResponse[]> = async (req, res) => {
    if (req.method !== "GET") {
        res.status(404);
        return;
    }
    try {
        const measurementsParameters = { ...req.query };

        if (!measurementsParameters && !measurementsParameters.locationId) {
            res.status(200).json([]);
            return;
        }

        const measurementsResponse = await V2Client.measurementsGetV2MeasurementsGet(measurementsParameters);
        console.log(measurementsResponse);
        res.status(200).json(measurementsResponse.results ?? []);
    } catch {
        res.status(500).json([]);
    }
}

export default measurementsHandler;