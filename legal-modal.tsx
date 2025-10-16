import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "kopvillkor" | "angerratt";
}

const legalContent = {
  kopvillkor: {
    title: "Köpvillkor",
    content: `
**1. Allmänt**
Dessa villkor gäller för alla bokningar och köp av tatueringstjänster hos Da Vinci Ink (Org.nr 559223-8215), beläget på Guldmyntsgatan 38, 414 81 Göteborg.

**2. Bokning & Betalning**

Bokningar görs via kontaktformulär, Instagram eller telefon.

Resterande belopp betalas på plats via Swish eller kontant.

**3. Avbokning / Ombokning**

Avbokning måste ske senast 48 timmar innan bokad tid.

Ombokning kan göras kostnadsfritt om det sker minst 48 timmar i förväg.

**4. Reklamationer**
Om du upplever problem med din tatuering efter besöket, vänligen kontakta oss inom 7 dagar. Vi erbjuder en kostnadsfri touch-up vid behov, inom rimlig tid efter besöket.
    `
  },
  angerratt: {
    title: "Ångerrätt",
    content: `
**1. Tjänster (tatueringar)**
Enligt lagen om distansavtal (2005:59) gäller ingen ångerrätt för tjänster som har utförts, om kunden har samtyckt till att arbetet påbörjas under ångerfristen.

När du bokar en tatuering hos oss och påbörjar behandlingen, avsäger du dig rätten till ångerrätt.

**2. Bokningsavgift**
Bokningsavgifter återbetalas inte vid ånger, sen avbokning eller utebliven närvaro. Du har dock rätt att omboka enligt villkoren ovan.

**3. Produkter (om tillämpligt)**
Vid försäljning av fysiska produkter (t.ex. aftercare-produkter) gäller 14 dagars ångerrätt från det att du mottagit varan, förutsatt att den är oanvänd och i originalförpackning.

För att utöva ångerrätt eller reklamera en vara, kontakta oss via:
📧 armanjamal@hotmail.com
📞 076‑910 94 40
    `
  }
};

export function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  const content = legalContent[type];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-black border border-luxury-gold/20">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="font-serif text-2xl luxury-gold">
            {content.title}
          </DialogTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-luxury-gold hover:text-light-gold hover:bg-luxury-gold/10"
          >
            <X className="h-5 w-5" />
          </Button>
        </DialogHeader>
        <div className="text-gray-300 leading-relaxed space-y-4">
          {content.content.split('\n').map((line, index) => {
            if (line.startsWith('**') && line.endsWith('**')) {
              // Bold headers
              return (
                <h3 key={index} className="font-semibold luxury-gold text-lg mt-6 mb-2">
                  {line.replace(/\*\*/g, '')}
                </h3>
              );
            } else if (line.startsWith('*') && line.endsWith('*')) {
              // Italic text
              return (
                <p key={index} className="italic text-gray-400 text-sm">
                  {line.replace(/\*/g, '')}
                </p>
              );
            } else if (line.trim() === '') {
              // Empty lines
              return <div key={index} className="h-2" />;
            } else {
              // Regular text
              return (
                <p key={index} className="text-gray-300">
                  {line}
                </p>
              );
            }
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}