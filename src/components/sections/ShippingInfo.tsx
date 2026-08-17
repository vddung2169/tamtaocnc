"use client";

import { Check, Copy, MapPin, Truck, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { MapEmbed } from "@/components/MapEmbed";
import { Button } from "@/components/ui/button";
import { shippingPoints, site } from "@/data/site";

export function ShippingInfo() {
  const [copied, setCopied] = useState<string | null>(null);

  async function copyAddress(point: (typeof shippingPoints)[number]) {
    const text = `${point.address} - ${point.receiver} - ${site.phone}`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(point.label);
      toast.success("Đã chép địa chỉ", { description: text });
      window.setTimeout(() => setCopied(null), 2000);
    } catch {
      toast.error("Chưa chép được địa chỉ", {
        description: "Bạn chọn và chép tay giúp, hoặc nhắn Zalo để được gửi lại.",
      });
    }
  }

  return (
    <section aria-labelledby="gui-may" className="reveal">
      <h2 id="gui-may" className="type-display text-2xl sm:text-3xl">
        Gửi máy về tiệm
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Ghi rõ tên và số điện thoại người gửi trong kiện hàng để tiệm đối chiếu khi nhận.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {shippingPoints.map((point) => (
          <div
            key={point.label}
            className="flex flex-col rounded-xl border border-line bg-surface p-5"
          >
            <p className="type-eyebrow flex items-center gap-2">
              <Truck className="size-3.5 text-neon" aria-hidden="true" />
              {point.label}
            </p>

            <p className="mt-3 flex items-start gap-2 text-base font-medium">
              <MapPin className="mt-1 size-4 shrink-0 text-neon" aria-hidden="true" />
              {point.address}
            </p>

            <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <User className="size-4 shrink-0" aria-hidden="true" />
              {point.receiver} — <span className="num">{site.phoneDisplay}</span>
            </p>

            <p className="mt-1 text-xs text-muted-foreground">{point.note}</p>

            <MapEmbed
              query={point.mapQuery}
              placeHref={point.mapHref}
              title={`Bản đồ Google tới ${point.label}: ${point.address}`}
              className="mt-4"
            />

            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-3 w-full"
              onClick={() => copyAddress(point)}
            >
              {copied === point.label ? (
                <Check aria-hidden="true" />
              ) : (
                <Copy aria-hidden="true" />
              )}
              {copied === point.label ? "Đã chép" : "Chép địa chỉ"}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
