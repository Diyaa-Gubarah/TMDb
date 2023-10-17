interface Error {
  code: string;
  message_en: string;
  message_ar: string;
}

export const handlePhoneError = (error): Error => {
  const errorCode = error.code;
  switch (errorCode) {
    case "auth/invalid-phone-number":
      return {
        code: errorCode,
        message_en:
          "The phone number you entered is invalid. Please enter a valid phone number.",
        message_ar:
          "رقم الهاتف الذي أدخلته غير صالح. يرجى إدخال رقم هاتف صالح.",
      };
    case "auth/missing-phone-number":
      return {
        code: errorCode,
        message_en: "Please enter your phone number to continue.",
        message_ar: "يرجى إدخال رقم الهاتف الخاص بك للمتابعة.",
      };
    case "auth/user-not-found":
      return {
        code: errorCode,
        message_en:
          "The phone number you entered is not registered. Please create an account first.",
        message_ar: "رقم الهاتف الذي أدخلته غير مسجل. يرجى إنشاء حساب أولاً.",
      };
    case "auth/too-many-requests":
      return {
        code: errorCode,
        message_en:
          "We have blocked all requests from this device due to unusual activity. Please try again later.",
        message_ar:
          "لقد قمنا بحظر جميع الطلبات من هذا الجهاز بسبب نشاط غير عادي. يرجى المحاولة مرة أخرى في وقت لاحق.",
      };
    case "auth/network-request-failed":
      return {
        code: error.code,
        message_en: "Network error occurred",
        message_ar: "حدث خطأ في الشبكة",
      };
    case "auth/app-not-authorized":
      return {
        code: error.code,
        message_en: "The app is not authorized to use Authentication.",
        message_ar: "التطبيق غير مصرح له باستخدام المصادقه.",
      };
    case "auth/missing-client-identifier":
      return {
        code: error.code,
        message_en:
          "This request is missing a valid app identifier, meaning that neither SafetyNet checks nor reCAPTCHA checks succeeded.",
        message_ar:
          "هذا الطلب يفتقد معرف تطبيق صالح ، مما يعني أن فحوصات SafetyNet وفحوصات reCAPTCHA لم تنجح.",
      };

    default:
      return {
        code: errorCode,
        message_en: "An error occurred. Please try again.",
        message_ar: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
      };
  }
};

export const handleOTPError = (error): Error => {
  const errorCode = error.code;
  switch (errorCode) {
    case "auth/invalid-verification-code":
      return {
        code: errorCode,
        message_en:
          "The verification code you entered is invalid. Please check your code and try again.",
        message_ar:
          "الكود الذي أدخلته غير صالح. يرجى التحقق من الكود والمحاولة مرة أخرى.",
      };
    case "auth/code-expired":
      return {
        code: errorCode,
        message_en:
          "The verification code you entered has expired. Please request a new code and try again.",
        message_ar:
          "انتهت صلاحية الكود الذي أدخلته. يرجى طلب كود جديد والمحاولة مرة أخرى.",
      };
    case "auth/quota-exceeded":
      return {
        code: errorCode,
        message_en:
          "We have blocked all requests from this device due to unusual activity. Please try again later.",
        message_ar:
          "لقد قمنا بحظر جميع الطلبات من هذا الجهاز بسبب نشاط غير عادي. يرجى المحاولة مرة أخرى في وقت لاحق.",
      };
    case "auth/missing-verification-code":
      return {
        code: errorCode,
        message_en:
          "The verification code is missing. Please enter the verification code and try again.",
        message_ar: "الكود غير موجود. يرجى إدخال الكود والمحاولة مرة أخرى.",
      };
    case "auth/session-expired":
      return {
        code: errorCode,
        message_en:
          "The session has expired. Please request a new verification code and try again.",
        message_ar:
          "انتهت صلاحية الجلسة. يرجى طلب كود التحقق الجديد والمحاولة مرة أخرى.",
      };
    case "auth/maximum-second-attempts":
      return {
        code: errorCode,
        message_en:
          "You have exceeded the maximum number of attempts. Please try again later.",
        message_ar:
          "لقد تجاوزت الحد الأقصى لعدد المحاولات. يرجى المحاولة مرة أخرى في وقت لاحق.",
      };
    case "auth/network-request-failed":
      return {
        code: error.code,
        message_en: "Network error occurred",
        message_ar: "حدث خطأ في الشبكة",
      };

    default:
      return {
        code: errorCode,
        message_en: "An error occurred. Please try again.",
        message_ar: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
      };
  }
};

export const handleDisplayNameError = (error): Error => {
  const errorCode = error.code;
  switch (errorCode) {
    case "auth/invalid-display-name":
      return {
        code: errorCode,
        message_en:
          "The display name you entered is invalid. Please enter a valid display name.",
        message_ar: "اسم العرض الذي أدخلته غير صالح. يرجى إدخال اسم عرض صالح.",
      };
    case "auth/display-name-too-long":
      return {
        code: errorCode,
        message_en:
          "The display name you entered is too long. Please enter a shorter display name.",
        message_ar: "اسم العرض الذي أدخلته طويل جداً. يرجى إدخال اسم عرض أقصر.",
      };
    case "auth/network-request-failed":
      return {
        code: error.code,
        message_en: "Network error occurred",
        message_ar: "حدث خطأ في الشبكة",
      };
    default:
      return {
        code: errorCode,
        message_en: "An error occurred. Please try again.",
        message_ar: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
      };
  }
};

export const handleAddNewBusError = (error: any): Error => {
  const errorCode = error.code;
  switch (errorCode) {
    case "auth/network-request-failed":
      return {
        code: errorCode,
        message_en: "Network error occurred",
        message_ar: "حدث خطأ في الشبكة",
      };
    case "firestore/permission-denied":
      return {
        code: errorCode,
        message_en: "You don't have permission to add a new bus.",
        message_ar: "ليس لديك الإذن لإضافة حافلة جديدة.",
      };
    case "invalid-arguments":
      return {
        code: errorCode,
        message_en: "Invalid bus data. Please check your inputs and try again.",
        message_ar:
          "بيانات الحافلة غير صالحة. يرجى التحقق من إدخالاتك والمحاولة مرة أخرى.",
      };
    default:
      return {
        code: errorCode,
        message_en: "An error occurred. Please try again.",
        message_ar: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
      };
  }
};

export const handleGetBusesError = (error: any): Error => {
  const errorCode = error.code;
  switch (errorCode) {
    case "auth/network-request-failed":
      return {
        code: errorCode,
        message_en: "Network error occurred",
        message_ar: "حدث خطأ في الشبكة",
      };
    case "firestore/failed-precondition":
      return {
        code: errorCode,
        message_en: "The query requires an index.",
        message_ar: "الاستعلام يحتاج الي تعريف.",
      };
    case "firestore/permission-denied":
      return {
        code: errorCode,
        message_en: "You don't have permission to fetch buses.",
        message_ar: "ليس لديك الإذن لاسترداد الحافلات.",
      };
    case "firestore/unavailable":
      return {
        code: errorCode,
        message_en: "Service unavailable. Please try again later.",
        message_ar: "الخدمة غير متاحة. يرجى المحاولة مرة أخرى لاحقًا.",
      };
    default:
      return {
        code: errorCode,
        message_en: "An error occurred. Please try again.",
        message_ar: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
      };
  }
};

export const handleGetBusError = (error: any): Error => {
  const errorCode = error.code;
  switch (errorCode) {
    case "auth/network-request-failed":
      return {
        code: errorCode,
        message_en: "Network error occurred",
        message_ar: "حدث خطأ في الشبكة",
      };
    case "permission-denied":
      return {
        code: errorCode,
        message_en: "You don't have permission to access this bus.",
        message_ar: "ليس لديك الإذن للوصول إلى هذه الحافلة.",
      };
    case "auth/not-found":
      return {
        code: errorCode,
        message_en: "The requested bus does not exist.",
        message_ar: "الحافلة المطلوبة غير موجودة.",
      };
    case "auth/unavailable":
      return {
        code: errorCode,
        message_en: "Service unavailable. Please try again later.",
        message_ar: "الخدمة غير متاحة. يرجى المحاولة مرة أخرى لاحقًا.",
      };
    default:
      return {
        code: errorCode,
        message_en: "An error occurred. Please try again.",
        message_ar: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
      };
  }
};
