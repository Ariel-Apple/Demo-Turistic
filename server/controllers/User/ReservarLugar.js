const stripe = require('stripe')('sk_test_51N9CEhIfAWFDxcrNpQEbscLmvrzg8trDp5FSLDnyg2vglQwJ9HptMQFNapdseZVKRWlydHdTrKnYtb42BxgXzebP00GUU1PXV2');

module.exports = {
  ReservarLugar: async (req, res) => {
    try {
      const { cantidadPersonas, token, lugarId, usuarioId } = req.body;
      console.log('Solicitud completa:', req.body); // Verifica toda la solicitud

      console.log('Cantidad de Personas:', cantidadPersonas); // Verifica el valor de cantidadPersonas
      console.log('ID del Lugar:', lugarId); // Verifica el valor de lugarId
      console.log('ID del Usuario:', usuarioId); // Verifica el valor de usuarioId

      if (!cantidadPersonas || !token || !lugarId || !usuarioId) {
        return res.status(400).json({ error: 'Faltan parámetros en la solicitud' });
      }

      // Lógica de manejo de reservas con Stripe
      // Puedes ajustar y expandir esta lógica según tus necesidades
      
      // Ejemplo: Crear una PaymentIntent para la reserva
      const paymentIntent = await stripe.paymentIntents.create({
        amount: cantidadPersonas * 100, // Multiplica por 100 para convertirlo a centavos
        currency: 'usd',
        payment_method: token,
        confirmation_method: 'manual',
        confirm: true,
        metadata: {
          lugarId,
          usuarioId,
        },
      });

      // Devuelve el client secret para confirmar el pago en el frontend
      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      console.error('Error al procesar la reserva:', error);
      res.status(500).json({ error: 'Error al procesar la reserva' });
    }
  }
};
