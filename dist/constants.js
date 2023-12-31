"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TRANSACTION_STATUS = exports.TRANSACTION_TYPES = exports.RegexEpressions = void 0;
class RegexEpressions {
}
exports.RegexEpressions = RegexEpressions;
RegexEpressions.phoneNumberRegex = RegExp('^(254|0)[0-9]{9}$');
class TRANSACTION_TYPES {
}
exports.TRANSACTION_TYPES = TRANSACTION_TYPES;
TRANSACTION_TYPES.BUY_FLOAT = "BUY_FLOAT";
TRANSACTION_TYPES.WALLET_TOP_UP = "WALLET_TOP_UP";
TRANSACTION_TYPES.AIRTIME_PURCHASE = "AIRTIME";
TRANSACTION_TYPES.SEND_MONEY = "SEND_MONEY";
TRANSACTION_TYPES.MPESA_PAYBILL = "PAYBILL";
TRANSACTION_TYPES.MPESA_TILL = "TILL";
TRANSACTION_TYPES.WALLET_PAYMENT = "WALLET_PAYMENT";
TRANSACTION_TYPES.WALLET_WITHDRAWAL = "WALLET_WITHDRAWAL";
TRANSACTION_TYPES.BANK_TRANSFER = "BANK_TRANSFER";
class TRANSACTION_STATUS {
}
exports.TRANSACTION_STATUS = TRANSACTION_STATUS;
TRANSACTION_STATUS.INITIATED = "INITIATED";
TRANSACTION_STATUS.STK_SENT = "STATIC_SENT";
TRANSACTION_STATUS.SUCCESSFUL = "SUCCESSFUL";
TRANSACTION_STATUS.PENDING = "PENDING";
TRANSACTION_STATUS.FAILED = "FAILED";
//# sourceMappingURL=constants.js.map