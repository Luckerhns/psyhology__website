import { GoodType } from "../../../database/relations";
import ModelException from "../../error/ModelException";
import { isModelExists } from "../../functions/checkModel";

export default class GoodTypeService {
    static async createType(typeParam) {
        if (!typeParam) throw ModelException.ModelNotFound("No type argument");
        const hasType = await isModelExists(GoodType, { goodType: typeParam });
        if (hasType)
            throw ModelException.ModelExists("This type has alredy exists");
        const goodType = await GoodType.create({ goodType: typeParam });
        return goodType;
    }

    static async getTypes(params?) {
        const types = await GoodType.findAndCountAll();

        return types;
    }

    static async removeType(paramType) {}
}
