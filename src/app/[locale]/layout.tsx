import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { RootProvider } from "@/components/providers/root-provider";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <RootProvider>{children}</RootProvider>
    </NextIntlClientProvider>
  );
}
