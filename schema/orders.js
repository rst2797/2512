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
    type: String,
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
  selling_price: {
    type: Number,
    required: true,
  },
  sku: {
    type: String,
    required: true,
  },
  units: {
    type: String,
    default: "1",
  },
  size: {
    type: String,
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
    deliveryAddress: {
      type: {
        postalCode: {
          type: String,
          required: true,
        },
        address1: {
          type: String,
          required: true,
        },
        address2: {
          type: String,
        },
        landmark: {
          type: String,
        },
      },
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
    payment_status: {
      type: Boolean,
      enum: [true, false],
      default: false,
    },
    paymentMethod: {
      type: String,
      enum: ["Prepaid", "COD"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;
