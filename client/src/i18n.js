import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: {
          "Overview dashboard": "Overview dashboard",
        },
      },
      ar: {
        translations: {
          "Total Revenue": "إجمالي الإيرادات",
          "lower growth": "النمو المنخفض",
          "Product wise sales": "مبيعات الحكمة المنتج",
          Sales: "مبيعات المنتجات الحكيمة",
          "Weekly Sales": "المبيعات الأسبوعية",
          Employees: "الموظفين",
          "Product Analysis": "تحليل المنتج",
          Product: "المنتج",
          Resources: "مصادر",
          Todo: "من أجل القيام به",
          Add: "حفظ",
          Schedules: "النطاقات",
          Sep: "سبتمبر",
          Events: "أحداث",
          "Skype call with alex": "سكايب الاتصال مع اليكس",
          London: "لندن",
          UK: "المملكة المتحدة",
          "Data Analysing with team": "تحليل البيانات مع الفريق",
          "San Francisco": "سان فرانسيسكو",
          CA: "CA",
          "Meeting with client": "لقاء مع العميل",
          "San Diego": "سان دييغو",
          "This Month": "هذا الشهر",
          "Average Weekly Profit": "متوسط ​​الربح الأسبوعي",
          "Weekly Customer Orders": "طلبات العملاء الأسبوعية",
          "Active Users": "المستخدمين النشطين",
          "Email account": "حساب البريد الإلكتروني",
          Requests: "طلبات",
          "Amount Due": "المبلغ المستحق",
          "Milestone Completed": "منجز معلما",
          "Payment for next week": "الدفع للأسبوع المقبل",
          Subscribers: "مكتتب",
          "You main list growing": "أنت القائمة الرئيسية المتنامية",
          Followers: "متابعون",
          "First name": "الاسم الاول",
          Progress: "تقدم",
          Amount: "كمية",
          Deadline: "حد",
          "Herman Beck": "هيرمان بيك",
          "Messsy Adam": "آدم فوضوي",
          July: "يوليو",
          "John Richards": "جون ريتشاردز",
          Apr: "أبريل",
          "Peter Meggik": "بيتر ميجيك",
          May: "مايو",
          Edward: "إدوارد",
          "Manage Tickets": "إدارة التذاكر",
          James: "يوحنا",
          "Donec rutrum congue leo eget malesuada":
            "يجادل دونيك روثروم مع ليو إيجيت ماليسوادا",
          "Quisque velit nisi": "أبجد هوز الدولار",
          "elementum id enim vivamus":
            "أبجد هوز الجلوس الدولار أبجد هوز الجلوس الدولار",
          "pretium ut lacinia in":
            "أبجد هوز الجلوس الدولار أبجد هوز الجلوس الدولار",
          "Last responded": "الرد الاخير",
          "hours ago": "منذ ساعات",
          "Due in": "هذا بسبب",
          Days: "أيام",
          Manage: "يدير",
          "Quick reply": "الرد السريع",
          "Another action": "وظيفة أخرى",
          "Resolve Issue": "حل المشكلة",
          "Close Issue": "أغلق الرقم",
          Stella: "ستيلا",
          "Curabitur aliquet quam id dui posuere blandit":
            "أبجد هوز الجلوس أبجد هوز الجلوس",
          "Pellentesque in ipsum id orci porta dapibus":
            "أبجد هوز الجلوس أبجد هوز الجلوس",
          "Sed porttitor lectus nibh": "أبجد هوز هو مجرد دمية النص",
          "Curabitur non nulla sit amet nisl": "أبجد هوز هو مجرد دمية النص",
          "John Doe": "فلان الفلاني",
          "Mauris blandit aliquet elit eget tincidunt nibh pulvinar":
            "أبجد هوز هو مجرد دمية النص",
          "Nulla quis lorem ut libero malesuada feugiat":
            "أبجد هوز هو مجرد دمية النص",
          "Proin eget tortor risus": "أبجد هوز هو مجرد دمية النص",
          "Lorem ipsum dolor sit amet": "أبجد هوز هو مجرد دمية النص",
          "Member Profit": "ربح الأعضاء",
          "Total Profit": "اجمالي الربح",
          AM: "صباح",

          Main: "الرئيسي",
          Dashboard: "لوحة القيادة",
          Widgets: "الحاجيات",
          "UI Elements": "عناصر واجهة المستخدم",
          "UI Features": "ميزات واجهة المستخدم",
          "Basic UI Elements": "العناصر الأساسية",
          Accordions: "أكورديون",
          Buttons: "زر",
          Badges: "شارات",
          Breadcrumbs: "فتات الخبز",
          "Form Elements": "نماذج",
          "Data Representation": "شرح البيانات",
          Dropdowns: "قائِمة مُنْسَدِلة",
          Modals: "الحوار",
          "Progress bar": "شريط التقدم",
          Pagination: "ترقيم الصفحات",
          Tabs: "علامات التبويب",
          Typography: "الاسلوب والظهور",
          Tooltips: "تلميح",
          "Advanced UI": "واجهة المستخدم المتقدمة",
          Clipboard: "الحافظة",
          "Context menu": "قائمة السياق",
          Sliders: "الانزلاق",
          Carousel: "دائري",
          Loaders: "رافعاتs",
          "Form elements": "نماذج",
          "Basic Elements": "عناصر النموذج",
          "Advanced Elements": "العناصر المتقدمة",
          Validation: "التحقق من صحة",
          Wizard: "ساحر",
          Editors: "المحررين",
          "Text Editor": "محرري النصوص",
          "Code Editor": "محرري الكود",
          Charts: "الرسوم البيانية",
          Tables: "الطاولةs",
          "Basic Table": "الجداول الأساسية",
          "Data Table": "جداول البيانات",
          "Sortable Table": "جدول قابل للفرز",
          Popups: "يظهر فجأةs",
          Notifications: "إخطاراتs",
          Icons: "الرموز",
          Maps: "خرائط",
          "Sample Pages": "صفحات عينة",
          "User Pages": "صفحات المستخدم",
          "User Listing": "قائمة المستخدم",
          Login: "تسجيل الدخول",
          "Login 2": " تسجيل الدخول 2 ",
          Register: "سجل",
          "Register 2": " سجل 2 ",
          Lockscreen: " قفل الشاشة ",
          "Error Pages": "صفحات خطأ",
          "General Pages": "الصفحات العامة",
          "Blank Page": " صفحة فارغة ",
          Profile: "الملف الشخصي ",
          FAQ: "تعليمات",
          "FAQ 2": " أسئلة مكررة 2 ",
          "News Grid": " شبكة الأخبار ",
          Timeline: " الجدول الزمني ",
          "Search Results": " نتائج البحث ",
          Chats: " دردشة",
          Tickets: " تذاكر ",
          Gallery: " صالة عرض",
          "Todo List": "قوائم المهام",
          "E-commerce": "التجارة الإلكترونية",
          Invoice: " فاتورة ",
          Pricing: " جدول التسعير ",
          Apps: "تطبيقات",
          "E-mail": "البريد الإلكتروني",
          "Kanban Board": "كانبان بورد",
          Calendar: "التقويم",
          Help: "مساعدة",
          Documentation: "توثيق",
          "Henry Klein": "هنري كلاين",
          "Take Tour": "خذ جولة",
          "Log Out": "تسجيل خروج",
          "Gold Member": "عضو ذهبي",
          "Tree View": "عرض الشجرة",
          "Landing Page": "الصفحة المقصودة",
          "Product Catalogue": "بيان المنتج",
          "Project List": "قائمة المشروع",
          Orders: "طلب",
          Navigation: "قائمة طعام",
          "Account settings": "إعدادت الحساب",
          "Change Password": "تغيير كلمة السر",
          "To-do list": "حضر قائمة",
          "Richard V.Welsh": "ريتشارد ف. ولش",
          Manager: "مدير",
          "New Project": "مشروع جديد",

          Reports: "تقارير",
          PDF: "بي دي إف",
          doc: "وثيقة",
          Projects: "وثيقة",
          "View Project": "عرض المشاريع",
          "Edit Project": "تحرير المشاريع",
          English: "الإنجليزية",
          Arabic: "عربى",
          "User Options": "خيارات المستخدم",
          Actions: "عمل",
          "Lock Account": "قفل الحساب",
          Messages: "رسائل",
          "Mark send you a message": "مارك يرسل لك رسالة",
          "Minutes ago": "منذ 1 دقيقة",
          "Cregh send you a message": "إنشاء نرسل لك رسالة",
          "Profile picture updated": "تحديث صورة ملفك الشخصي",
          "Update dashboard": "تحديث لوحة القيادة",
          "new messages": "4 رسائل جديدة",
          "Event today": "حدث اليوم",
          "Just a reminder that you have an event today":
            "مجرد تذكير بأن لديك حدث اليوم",
          "Launch Admin": "تشغيل المسؤول",
          "New admin wow": "مشرف جديد واو!",
          "See all notifications": "اطلع على جميع الإشعارات",
          Inbox: "صندوق الوارد",
          "All rights reserved": "كل الحقوق محفوظة",
          "Hand-crafted": "الحرف اليدوية",
          "made with": "مصنوع من",
          Copyright: "حقوق التأليف والنشر",
          Settings: "الإعدادات",
          "Advanced settings": "إعدادات متقدمة",
          "Create New Project": "إنشاء مشروع جديد",
          "Software Development": "تطوير البرمجيات",
          "UI Development": "تطوير واجهة المستخدم",
          "Software Testing": "اختبار البرمجيات",
          "See all projects": "رؤية جميع المشاريع",
          "Manage Accounts": "ادارة الحساب",
          "Check Inbox": "تحقق من بريدك الوارد",
          "Sign Out": "خروج",
          Score: "أحرز هدفا",
          Schedule: "الطاولة",
          New: "جديد",
          "You have": "عندك",
          "Application Error": "خطأ في تطبيق",
          "Just now": "الان فقط",
          "View all": "عرض الكل",
          "Private message": "رسالة خاصة",
          "New user registration": "تسجيل مستخدم جديد",
          "days ago": "أيام مضت",
          "unread mails": "رسائل غير مقروءة",
          "Marian Garner": "ماريان غارنر",
          "The meeting is cancelled": "تم الغاء الاجتماع",
          "David Grey": "ديفيد جراي",
          "Travis Jenkins": "ترافيس جنكينز",
          "new notifications": "إخطارات جديدة",

          "Creating component page": "إنشاء صفحة المكون",
          "build a js based app": "بناء التطبيق على أساس JS",
          "Meeting with Alisa": "مقابلة مع اليسا",
          "Call Sarah Graves": "استدعاء سارة القبور",
          FRIENDS: "اصحاب",
          "See All": "عرض الكل",
          "Thomas Douglas": "توماس دوغلاس",
          Available: "متاح",
          Catherine: "كاثرين",
          min: "دقيق",
          "Daniel Russell": "دانيال راسل",
          "James Richardson": "جيمس ريتشاردسون",
          "Madeline Kennedy": "مادلين كينيدي",
          "Sarah Graves": "مقابر سارة",
          Feb: "شهر فبراير",
        },
      },
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
