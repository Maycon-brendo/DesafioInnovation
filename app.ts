import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './src/routes/productRoutes';
import sequelize from './database';
import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', productRoutes);

app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
  });


sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });
