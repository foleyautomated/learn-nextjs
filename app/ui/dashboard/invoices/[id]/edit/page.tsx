import Form from "@/app/ui/dashboard/invoices/edit-form";
import Breadcrumbs from "@/app/ui/dashboard/invoices/breadcrumbs";
import { fetchCustomers } from "@/app/lib/data";
import { fetchInvoiceById } from "@/app/lib/data";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/ui/dashboard/invoices" },
          {
            label: "Edit Invoice",
            href: `/ui/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}