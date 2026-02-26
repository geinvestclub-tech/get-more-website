import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "שיחת היכרות",
    duration: "15–30 דקות",
    desc: "שיחה אישית ודיסקרטית עם מנהל לקוחות בכיר. מטרת השיחה היא להכיר אותך, להבין את הצרכים שלך ולבחון האם יש התאמה. ללא לחץ, ללא מכירה.",
    details: ["דיסקרטיות מוחלטת", "ללא התחייבות", "בכל ערוץ — טלפון / זום / פגישה"],
  },
  {
    num: "02",
    title: "בדיקת כשירות",
    duration: "24–48 שעות",
    desc: "בחינה מקצועית האם אתה עומד בתנאי המשקיע הכשיר על פי חוק הייעוץ הישראלי. התהליך מתבצע בשקט ובמהירות, ללא רישומים מיותרים.",
    details: ["על פי חוק הייעוץ תשנ\"ה-1995", "תהליך מהיר ויעיל", "ליווי מלא לאורך הדרך"],
  },
  {
    num: "03",
    title: "הצגת ההזדמנות",
    duration: "לפי זמינות",
    desc: "לאחר בדיקת הכשירות, מתואמת פגישה עם בית ההשקעות הרלוונטי. בית ההשקעות מציג את ההזדמנות ישירות, כולל כל חומרי המידע הרשמיים.",
    details: ["ישירות מול בית ההשקעות", "חומרי מידע רשמיים מלאים", "שאלות ותשובות"],
  },
  {
    num: "04",
    title: "החלטה ומסמכים",
    duration: "לפי בחירתך",
    desc: "ההחלטה היא שלך בלבד, בזמן שלך. אם בחרת להמשיך — אנחנו מלווים את תהליך חתימת המסמכים הרשמיים מול בית ההשקעות.",
    details: ["ללא לחץ זמן", "ליווי בחתימת מסמכים", "כל השקעה ישירות מול בית ההשקעות"],
  },
  {
    num: "05",
    title: "ליווי שוטף",
    duration: "לאורך חיי ההשקעה",
    desc: "מנהל הלקוח שלך נשאר זמין לאחר ההשקעה. עדכונים שוטפים, מענה מהיר לשאלות, ותיאום מול בית ההשקעות בכל עת.",
    details: ["עדכונים שוטפים", "זמינות גבוהה", "תיאום מתמשך"],
  },
];

export default function ProcessPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="section-label">שלב אחר שלב</span>
          <h1
            className="text-5xl md:text-7xl text-charcoal mt-4 mb-6 leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            תהליך ברור
            <br />
            <span className="gold-shimmer">ללא הפתעות</span>
          </h1>
          <p className="text-charcoal-light text-xl max-w-2xl leading-relaxed">
            מהשיחה הראשונה ועד לסיום ההשקעה — תדעו בדיוק איפה אתם עומדים בכל רגע.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-mist">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute right-8 top-0 bottom-0 w-px bg-gold/20 hidden md:block" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={step.num} className="relative flex gap-8 items-start">
                  {/* Step number bubble */}
                  <div
                    className="relative z-10 w-16 h-16 flex-shrink-0 flex items-center justify-center border border-gold/40 bg-cream"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    <span className="text-gold font-bold text-lg">{step.num}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 luxury-card">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <h2
                        className="text-2xl text-charcoal"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {step.title}
                      </h2>
                      <span className="text-xs text-gold bg-gold/10 px-3 py-1 border border-gold/20">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-charcoal-light text-sm leading-relaxed mb-5">{step.desc}</p>
                    <div className="flex flex-wrap gap-3">
                      {step.details.map((d) => (
                        <span key={d} className="text-xs text-charcoal-light bg-parchment/50 px-3 py-1.5 border border-parchment">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl text-white mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
            מוכן להתחיל?
          </h2>
          <p className="text-cream/60 mb-8">הצעד הראשון הוא שיחה קצרה ופרטית</p>
          <Link href="/contact?type=check" className="btn-primary px-12 py-4 text-base">
            בדיקת התאמה דיסקרטית
          </Link>
        </div>
      </section>
    </div>
  );
}
