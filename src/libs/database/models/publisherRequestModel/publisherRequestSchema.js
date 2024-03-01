import mongoose from 'mongoose';

const publisherRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

const PublisherRequest = mongoose.models.PublisherRequest || mongoose.model('PublisherRequest', publisherRequestSchema);

export default PublisherRequest;
