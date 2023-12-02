import { GoodBrand } from "../../../database/relations";
import ModelException from "../../error/ModelException";
import { isModelExists } from "../../functions/checkModel";

export default class GoodBrandService {
    public static async createGoodBrand(brandParam) {
        if (!brandParam)
            throw ModelException.ModelNotFound("Brand was not transmitted");
        const hasBrand = await isModelExists(GoodBrand, {
            goodBrand: brandParam,
        });
        if (hasBrand)
            throw ModelException.ModelExists("This brand has alredy exists");
        const goodBrand = await GoodBrand.create({ goodBrand: brandParam });
        return goodBrand;
    }

    public static async getGoodBrands() {
        return await GoodBrand.findAndCountAll();
    }
}
