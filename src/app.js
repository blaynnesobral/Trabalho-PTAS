import express from 'express';
import categoriasRoutes from './routes/categorias.routes.js';
import contasRoutes from './routes/contas.routes.js';
import lancamentosRoutes from './routes/lancamentos.routes.js';
import usuariosRoutes from './routes/usuarios.routes.js';

const app = express();

app.use(express.json());
app.use('/categorias', categoriasRoutes);
app.use('/contas', contasRoutes);
app.use('/lancamentos', lancamentosRoutes);
app.use('/usuarios', usuariosRoutes);
export default app;