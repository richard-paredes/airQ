import { NextApiHandler } from "next";
import { V3Client, Location } from "../../openapi/openaq";

const locationsHandler: NextApiHandler<Location[]> = async (req, res) => {
    if (req.method !== "GET") {
        res.status(404);
        return;
    }

    try {
        const locationsParameters = { ...req.query };
        const locationsResponse = await V3Client.locationsGetV3LocationsGet(locationsParameters);
        res.status(200).json(locationsResponse.results ?? []);
    } catch (err) {
        res.status(500).json([]);
    }
}

export default locationsHandler;