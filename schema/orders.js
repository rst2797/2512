import mongoose from "mongoose";

const { Schema } = mongoose;

const orderItemSchema = new Schema({
  actualPrice: {
    type: String,
    required: true,
  },
  breadcrumb: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  itemTotal: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  numberOfRatings: {
    type: Number,
    required: true,
  },
  offPercentage: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});
const orderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: {
      type: [orderItemSchema],
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered"],
      default: "pending",
    },
    paymentMethod: {
      type: String,
      enum: ["pre_paid", "cash_on_delivery"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;
