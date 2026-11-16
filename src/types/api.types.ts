export type RoleType = 'BUYER' | 'SELLER' | 'ADMIN';
export type UserStatus = 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
export type ProductStatus = 'PENDING' | 'APPROVED' | 'REJECTED' | 'ARCHIVED';
export type OrderStatus =
  | 'PENDING_PAYMENT'
  | 'PAID'
  | 'IN_TRANSIT'
  | 'DELIVERED'
  | 'CANCELED';
export type PaymentMode = 'ONLINE' | 'COD';
export type PaymentStatus = 'INITIATED' | 'SUCCESS' | 'FAILED' | 'REFUNDED';

export interface ApiErrorDetail {
  code: string;
  details: string | string[];
}

export interface ApiResponse<T> {
  success: boolean;
  statusCode: number;
  message?: string;
  data?: T;
  error?: ApiErrorDetail;
  timestamp: string;
}

export interface PaginatedResult<T> {
  items: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface HealthStatus {
  status: string;
  service: string;
  database: string;
  timestamp: string;
}

