import prisma from "../../db";
import { success, failed} from "../../responses";

export const findAll = async (req, res) => {
    try {
        const categories = await prisma.category.findMany();
        return success({ res, data: categories });
    }catch(error){
        return failed({ res, error });
    }
}

export const findOne = async (req, res) => {
    try {
        const id = Number(req.params);
        const category = await prisma.category.findunique({
            where: {id},
        });
        return success({ res, data: category});
    }catch(error){
        return failed({ res, error });
    }
}

export const create = async (req, res) => {
    try {
        const category = await prisma.category.create(
            {
                data: req.body,
            }
        );
        return success({ res, data: category, status: 201 });
    }catch(error){
        return failed({ res, error});
    }
};

export const update = async (req, res) => {
    try {
        const id = Number(req.params)
        const category = await prisma.category.update({
            where: {id},
            data: req.body
        });
        return success({ res, data: category});
    }catch(error){
        return failed({ res, error});
    }
};

export const  remove = async (req, res) => {
    try{
        const id = Number(req.params);
        const category = await prisma.category.delete({where: {id}})
        return success({ res, data: category});
    }catch(error){
        return failed({ res, error});
    }
}