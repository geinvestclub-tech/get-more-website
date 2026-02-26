"use client";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "מה בדיוק עושה GET MORE?",
    a: "GET MORE מספקת מעטפת שירות לתיאום קשר בין משקיעים כשירים לבין בתי השקעות. אנחנו מלווים את הלקוח לאורך כל התהליך — ממינוי מנהל לקוח אישי, דרך בדיקת כשירות, ועד לחיבור הישיר לבית ההשקעות. איננו מנהלים תיקים ואיננו מעניקים ייעוץ השקעות.",
  },
  {
    q: "מה ההבדל בין GET MORE לבין יועץ השקעות רגיל?",
    a: "יועץ השקעות הוא בעל רישיון רגולטורי שמייעץ אילו ניירות ערך לרכוש. GET MORE אינה גוף כזה. אנחנו מספקים שירות תיאום ולוגיסטי — דמוי מנהל לקוחות פרטי — שמחבר בין הלקוח לבין בית ההשקעות. כל ההחלטות וההמלצות הפיננסיות באות מבית ההשקעות עצמו.",
  },
  {
    q: "כמה עולה השירות?",
    a: "מבנה העמלות של GET MORE שקוף ומוסכם מראש. פרטי התשלום נדונים בשיחת ההיכרות הראשונה. שיחת ההיכרות עצמה היא ללא עלות.",
  },
  {
    q: "מה זה 'משקיע כשיר' ואיך אני בודק שאני עומד בתנאים?",
    a: "משקיע כשיר הוא אדם פרטי או תאגיד שעומד בתנאי הכנסה ו/או שווי נכסים כפי שנקבעו בחקיקה הישראלית. לפרטים מלאים, עיין במדריך המשקיע הכשיר שלנו. לבדיקה אישית, ניתן לפנות אלינו ונבצע בדיקת כשירות ראשונית בדיסקרטיות מלאה.",
  },
  {
    q: "האם המידע שאמסור ישמר בסודיות?",
    a: "בהחלט. דיסקרטיות היא עמוד התווך של השירות שלנו. פרטי הלקוחות אינם נמסרים לכל גורם שלישי ללא אישור מפורש, ומאובטחים בהתאם לחוקי הגנת הפרטיות.",
  },
  {
    q: "מהו ההיקף המינימלי להשקעה?",
    a: "GET MORE עובדת עם לקוחות בעלי נכסים מנוהלים של 5 מיליון שקל ומעלה. ההיקף המינימלי הספציפי להשקעה עצמה נקבע על ידי בית ההשקעות ומפורט במסמכיו הרשמיים.",
  },
  {
    q: "כמה זמן לוקח תהליך ההצטרפות?",
    a: "תהליך בדיקת הכשירות הראשוני נמשך לרוב 24–48 שעות. החיבור לבית ההשקעות מתואם בהתאם ללוחות הזמנים של שני הצדדים. אנחנו שואפים לזרימה מהירה ויעילה תוך שמירה על האיכות.",
  },
  {
    q: "האם GET MORE בעלת רישיון?",
    a: "GET MORE פועלת כחברת שירותים המספקת תיאום ולוגיסטיקה. השירות אינו מחייב רישיון ייעוץ השקעות בשל אופי הפעילות. ההשקעות עצמן מבוצעות ישירות מול בית ההשקעות המורשה.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item py-6">
      <button
        className="flex items-start justify-between w-full gap-4 text-right"
        onClick={() => setOpen(!open)}
      >
        <span
          className="text-base text-charcoal font-medium leading-snug"
          style={{ fontFamily: "Heebo, sans-serif" }}
        >
          {q}
        </span>
        <span
          className={`text-gold flex-shrink-0 text-xl transition-transform duration-300 mt-0.5 ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ${open ? "max-h-96 mt-4" : "max-h-0"}`}
      >
        <p className="text-charcoal-light text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="section-label">שאלות נפוצות</span>
          <h1
            className="text-5xl md:text-6xl text-charcoal mt-4 mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            יש לך שאלות
            <br />
            <span className="gold-shimmer">יש לנו תשובות</span>
          </h1>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 bg-mist">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="border-t border-gold/20">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2
            className="text-3xl text-white mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            עדיין יש שאלות?
          </h2>
          <p className="text-cream/60 mb-8">
            אנחנו כאן. שיחה קצרה שווה אלף תשובות.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary px-10 py-4">
              תיאום שיחה
            </Link>
            <Link href="/contact?type=check" className="btn-outline border-gold/40 text-gold hover:border-gold px-10 py-4">
              בדיקת התאמה דיסקרטית
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
