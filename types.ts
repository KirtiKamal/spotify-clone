import exp from 'constants';
import Stripe from 'stripe';

export interface UserDetails {
    id: string;
    first_name: string;
    last_name: string;
    full_name?: string;
    avatar_url?: string;
    billing_address?: Stripe.Address;
    payment_method?: Stripe.PaymentMethod[Stripe.PaymentMethod.Type];
};

export interface Product {
    id: string;
    active?: boolean;
    name?: string;
    description?: string;
    images?: string[];
    metadata?: Stripe.Metadata;
};

export interface Price {
    id: string;
    product_id: string;
    active?: boolean;
    description?: string;
    currency?: string;
    type?: Stripe.Price.Type;
    unit_amount: number;
    interval?: Stripe.Price.Recurring.Interval;
    interval_count?: number;
    trail_period_days?: number | null;

    unit_amount_decimal: string;
    product: Product;
    metadata?: Stripe.Metadata;
};

export interface Subscription {
    id: string;
    user_id: string;
    price_id?: string;
    quantity?: number;
    status?: Stripe.Subscription.Status;
    metadata?: Stripe.Metadata;
    cancel_at_period_end?: boolean;
    created: string;
    current_period_end: string;
    current_period_start: string;
    ended_at?: string;
    canceled_at?: string;
    cancel_at?: string;
    trail_end?: string;
    trail_start?: string;
    price?: Price;
};


