import SectionHead from "@/components/ui/SectionHead";
import { comparisonColumns, comparisonRows } from "@/data/comparison";
import { cx } from "@/lib/utils";

export default function Comparison() {
  return (
    <section
      id="compare"
      style={{
        background: "var(--bg-2)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="wrap">
        <SectionHead
          eyebrow="Choose the right structure"
          title="Manager rental vs. white label vs. full licence"
          lede="MetaQuotes paused new MT5 white label issuance in late 2022, and full server licences remain hard to obtain. That reality shapes what is actually available to a new operator today — so here is the honest comparison."
        />

        <div className="tbl-scroll reveal">
          <table className="cmp">
            <thead>
              <tr>
                <th />
                {comparisonColumns.map((col) => (
                  <th key={col.key} className={cx(col.highlight && "hi")}>
                    {col.label}
                    {col.sub ? <span>{col.sub}</span> : null}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  {comparisonColumns.map((col) => (
                    <td key={col.key} className={cx(col.highlight && "hi")}>
                      {row.values[col.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="fineprint">
          Comparative figures reflect prevailing market ranges for 2026 and are
          indicative only. Costs for white label, main label and full licence
          routes vary widely by provider, jurisdiction and volume.
        </p>
      </div>
    </section>
  );
}
