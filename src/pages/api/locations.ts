import { NextApiHandler } from "next";
import { V2Client, V2LocationsResponse } from "../../openapi/openaq";

const locationsHandler: NextApiHandler<V2LocationsResponse[]> = async (req, res) => {
    if (req.method !== "GET") {
        res.status(404);
        return;
    }

    try {
        const locationsParameters = { ...req.query };
        const locationsResponse = await V2Client.locationsGetV2LocationsGet(locationsParameters);
        res.status(200).json(locationsResponse.results ?? []);
    } catch(err) {
        res.status(500).json([]);
    }
}

export default locationsHandler;