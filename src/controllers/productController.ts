import { Request, Response } from 'express';
import { Product } from '../models/Product';
import { ValidationError } from 'sequelize';


export const getProducts = async (req: Request, res: Response) => {
    const products = await Product.findAll();
    res.json(products);
  };


  export const createProduct = async (req: Request, res: Response) => {
    try {
      const productData = {
        ...req.body,
        created_at: new Date(),
      };
  
      const product = await Product.create(productData);
      res.json(product);
    } catch (error) {
      console.error('Erro ao criar o produto:', error);
      if (error instanceof ValidationError) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Erro desconhecido ao criar o produto.' });
      }
    }
};

  
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;

    console.log('Dados de atualização:', req.body);


    const existingProduct = await Product.findOne({ where: { id: productId } });

    if (existingProduct) {

      const updatedProduct = await existingProduct.update(req.body);


      res.json({ message: 'Produto atualizado com sucesso.', updatedProduct });
    } else {
      res.status(404).json({ error: 'Produto não encontrado.' });
    }
  } catch (error) {

    console.error('Erro ao atualizar o produto:', error);
    res.status(500).json({ error: 'Erro desconhecido ao atualizar o produto.' });
  }
};

  
  export const deleteProduct = async (req: Request, res: Response) => {
    try {
      const productId = req.params.id;
      const deletedProduct = await Product.destroy({ where: { id: productId } });
  
      if (deletedProduct) {
        res.json({ message: 'Produto excluído com sucesso.' });
      } else {
        res.status(404).json({ error: 'Produto não encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro desconhecido ao excluir o produto.' });
    }
  };
  
