import { NextApiHandler } from "next";
import { V3Client, Sensor } from "../../openapi/openaq";


const sensorsHandler: NextApiHandler<Sensor[]> = async (req, res) => {
    if (req.method !== "GET") {
        res.status(404);
        return;
    }

    const sensorsParams = { ...req.query };
    if (!sensorsParams || !sensorsParams.locationsId || typeof sensorsParams.locationsId !== "string") {
        res.status(200).json([]);
        return;
    }

    const sensorsResponse = await V3Client.sensorsGetV3LocationsLocationsIdSensorsGet({ locationsId: parseInt(sensorsParams.locationsId) });
    console.log(sensorsResponse);
    res.status(200).json(sensorsResponse.results ?? []);
    return;
}

export default sensorsHandler;