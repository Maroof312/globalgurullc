import { memo, useMemo, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import "./AccountingProcess.scss";

// Static data - memoized outside component
const processSteps = [
  {
    id: "overview",
    title: "How We Run the Book",
    icon: "bi-journal-bookmark",
    content: {
      description:
        "We run property accounting like a product: predictable, documented, and quietly excellent. Every entry ties to a lease, policy, or invoice; every schedule explains itself. Your team gets fewer questions and faster decisions.",
      benefits: [
        "Tighter cash flow: faster billing and collections",
        "Cleaner AP: utilities, taxes, insurance, and debt paid on time",
        "A faster close with fewer reclasses",
        "Audit ready workpapers and support",
      ],
      stats: [
        {
          value: "50%",
          label: "of U.S. B2B invoices are overdue",
        },
        {
          value: "40%",
          label: "of CFOs do not completely trust their financial data",
        },
        {
          value: "2%",
          label: "have complete confidence in cash flow visibility",
        },
      ],
    },
  },
  {
    id: "ar",
    title: "Accounts Receivable",
    subtitle: "Billing to Collections",
    icon: "bi-cash-coin",
    content: {
      description:
        "From recurring rent invoices to ancillary revenue and recoveries, we design AR that moves fast. Clear statements, automated dunning, and dashboards by asset and tenant.",
      activities: [
        "Rent billing by lease rules (retail, office, residential, industrial, storage)",
        "Ancillary charges (parking, storage, amenities, utilities pass throughs)",
        "Recoveries and adjustments (CAM, taxes, insurance) with caps respected",
        "Credit memos, write offs, and payment plans with approvals",
        "Collections cadence and dunning that tenants respond to",
      ],
      deliverables: [
        "Billing schedules and calendars by property",
        "AR aging with risk flags (tenant/sector)",
        "Cash application rules and unapplied cash resolution",
        "Dispute tracker with root cause notes",
      ],
      stat: {
        value: "8%",
        description: "Bad debts average of B2B credit sales",
      },
      calculation:
        "Each day of DSO ties up ≈ Annual Billings/365. Example: $24M billings → ~$65,753 per day; cut 5 days DSO → frees ~$328,767.",
    },
  },
  {
    id: "ap",
    title: "Accounts Payable",
    subtitle: "Utilities to Taxes, Insurance & Debt Service",
    icon: "bi-receipt",
    content: {
      description:
        "We keep essential payments clean and on time utilities, vendor services, real estate taxes, insurance premiums, and mortgage/loan payments with approvals that will not slow you down.",
      activities: [
        "Utilities and vendor invoice processing with PO/contract match",
        "Real estate tax schedules, escrow tie outs, and reminders",
        "Insurance premiums, renewals, allocations and COI tracking",
        "Mortgage/loan payments, covenants, and escrow activity",
      ],
      deliverables: [
        "AP aging and due date heat map",
        "Approval matrix and spend policy mapping",
        "Recurring schedules (taxes, insurance, debt)",
        "Vendor master hygiene and 1099/W 9",
      ],
      stat: {
        value: "79%",
        description: "of organizations were targeted by payments fraud in 2024",
      },
      risk: "We embed segregation of duties, positive pay/ACH controls, and dual approvals to cut risk without hurting speed.",
    },
  },
  {
    id: "accounting",
    title: "End to End Accounting",
    subtitle: "Accruals, Deferrals, Prepaids & Balance Sheet Tie Out",
    icon: "bi-graph-up",
    content: {
      description:
        "Month after month, we post clean accruals and reversals, track deferrals and prepaids, and reconcile subledgers to the balance sheet. Everything ties across the income statement, balance sheet, and cash flow.",
      activities: [
        "Revenue accruals/deferrals and straight line rent checks",
        "Expense accruals, reversals, and prepaid amortization",
        "Fixed asset subledger and depreciation tie out",
        "Intercompany and cross property allocations",
      ],
      deliverables: [
        "Accrual/deferral roll forwards",
        "Prepaid amortization schedules",
        "Fixed asset continuity schedules",
        "Balance sheet tie out checklist",
      ],
      stat: {
        value: "40%",
        description: "of CFOs do not completely trust their financial data",
      },
      confidence:
        "We keep assumptions logged and cross referenced so reviewers can trust the number and the narrative.",
    },
  },
  {
    id: "bank",
    title: "Bank Reconciliations",
    subtitle: "Complex & Multi Gateway",
    icon: "bi-bank",
    content: {
      description:
        "We reconcile operating, security deposit, and trust accounts plus merchant gateways, lockbox feeds, and property level subaccounts. Every recon includes exception queues and evidence links.",
      activities: [
        "Daily/weekly cash matching and exception clearing",
        "Lockbox, ACH, credit card, and gateway reconciliations",
        "Uncleared checks, stale items, and fraud investigation",
        "Intercompany cash sweeps and borrowing base support",
      ],
      deliverables: [
        "Bank to GL reconciliations with tick marks",
        "Exception aging and resolution notes",
        "Fraud controls (positive pay, ACH filters, approvals)",
        "Certification checklist (prep/review dates)",
      ],
      importance:
        "With fraud attempts widespread, rigorous reconciliations are a first line control. We pair daily monitoring with strong approvals to catch anomalies fast.",
    },
  },
  {
    id: "budgeting",
    title: "Budgeting & Forecasting",
    subtitle: "We Specialize in Yardi",
    icon: "bi-calculator",
    content: {
      description:
        "We build rolling forecasts and annual budgets directly from lease data and actuals. Yardi AB&F and Forecast Manager let us model turnover, recoveries, and lease roll in ways spreadsheets cannot.",
      activities: [
        "AB&F models tied to Voyager (rent steps, recoveries, rollovers)",
        "Driver based opex and headcount planning",
        "Scenario and sensitivity (rates, leasing, occupancy, capex)",
        "Version control, audit trail, and commentary",
      ],
      benefit:
        "Transform spreadsheet uncertainty into a unified source of truth that seamlessly connects leasing, asset management, and financial operations for enhanced decision making and strategic planning.",
      stat: {
        value: "35%",
        description:
          "of high performing FP&A teams report using AI/ML for forecasting",
      },
    },
  },
  {
    id: "retail",
    title: "Retail Sales Reporting",
    subtitle: "Percentage Rent & Breakpoints",
    icon: "bi-percent",
    content: {
      description:
        "We collect and validate monthly sales, calculate natural/fixed breakpoints, and compute percentage rent including tiered structures.",
      activities: [
        "Sales capture and validation (file feeds, portals, attestations)",
        "Natural and fixed breakpoint setup; tiered overage rates",
        "Audit of exclusions (returns, taxes, ecommerce carve outs)",
        "Statements and dispute support for tenants",
      ],
      deliverables: [
        "Sales compliance dashboard and aging",
        "Breakpoint and rate schedule by tenant",
        "Percentage rent statements and workpapers",
        "Exception log with notes to clause",
      ],
      example:
        "Percentage rent is standard in retail; 6% is a common rate and the natural breakpoint is Base Rent ÷ % Rate. Example: Base $300,000/yr and 6% rate → Natural Breakpoint = $5,000,000 sales.",
    },
  },
  {
    id: "audit",
    title: "Year End Audit",
    subtitle: "Hassle Free by Design",
    icon: "bi-shield-check",
    content: {
      description:
        "We prepare PBC lists that map every balance to support, keep a clean evidence index, and respond to auditor requests without derailing your team.",
      preparations: [
        "PBC list with links to schedules and evidence",
        "Roll forwards (AR, AP, FA, prepaids, accruals)",
        "Debt and covenant support, tax packs, and legal confirmations",
        "Post close adjusting entry log with approvals",
      ],
      outcome:
        "Auditors get the trail. Your team keeps moving. We quantify impacts before they become reclasses.",
      context:
        "Strong controls and documentation reduce follow ups and keep the audit focused on risk not retrieval.",
    },
  },
  {
    id: "lease",
    title: "Lease Administration",
    subtitle: "Abstraction, Dates & Dollars You Can Trust",
    icon: "bi-file-earmark-text",
    content: {
      description:
        "We centralize lease data, track critical dates, and connect terms to billing and recoveries so the math always matches the lease.",
      services: [
        "Abstracts (economics, clauses, options, caps/exclusions)",
        "Critical dates and notifications (renewals, kick outs, co tenancy)",
        "Sales and percentage rent data workflow for retail",
        "Integrations with Yardi/MRI/RealPage",
      ],
      deliverables: [
        "Lease abstracts and source links",
        "Rules sheet feeding billing and recoveries",
        "Exception log for missing/unclear clauses",
        "Audit index per lease",
      ],
      stat: {
        value: "84%",
        description:
          "of enterprises are prioritizing lease management going into 2024",
      },
      benefit:
        "Clean, connected lease data pays for itself in fewer disputes and faster closes.",
    },
  },
  {
    id: "cam",
    title: "CAM Reconciliations & Audit",
    subtitle: "Lease True, Tenant Clear",
    icon: "bi-clipboard-data",
    content: {
      description:
        "We apply caps, bases, and thresholds exactly as the lease reads, document assumptions, and ship tenant ready statements with evidence.",
      activities: [
        "Lease abstraction: caps, bases, thresholds, admin %, exclusions",
        "GL scrub: non recoverables out; policy alignment in",
        "Gross ups and allocations (single/multi threshold)",
        "Tenant statements and evidence pack; audit response",
      ],
      deliverables: [
        "CAM Rules Sheet by tenant",
        "GL to CAM mapping and capital policy notes",
        "Gross up workbook and assumptions log",
        "Tenant statements (PDF and Excel) and index",
      ],
      stat: {
        value: "$29,550",
        description:
          "Potential savings from 1% error reduction in 250k SF property",
      },
      example:
        "Expense volatility is real: office OPEX examples reached ~$11.82/sf in 2023 in some markets; every 1% error ≈ $11,820 per 100k SF.",
      cta: {
        text: "Run a Free CAM X Ray",
        link: "/contact",
      },
    },
  },
];

// Simple loader component
const SimpleLoader = () => (
  <div className="d-flex justify-content-center py-4">
    <div className="spinner-border text-primary" role="status"></div>
  </div>
);

// Content renderer component - memoized for performance
const RenderStepContent = memo(({ content }) => {
  const renderContentBlocks = useMemo(() => {
    const blocks = [];

    // Description
    if (content.description) {
      blocks.push(
        <motion.div
          key="description"
          className="content-block description-block mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <p className="content-description text-muted">
            {content.description}
          </p>
        </motion.div>
      );
    }

    // Two column layout
    const leftColumn = [];
    const rightColumn = [];

    // Benefits
    if (content.benefits) {
      leftColumn.push(
        <motion.div
          key="benefits"
          className="content-block mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h5 className="content-subtitle h6 fw-semibold mb-3">
            What You Gain
          </h5>
          <ul className="content-list benefits-list">
            {content.benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                {benefit}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      );
    }

    // Activities
    if (content.activities) {
      leftColumn.push(
        <motion.div
          key="activities"
          className="content-block mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h5 className="content-subtitle h6 fw-semibold mb-3">
            Activities We Cover
          </h5>
          <ul className="content-list activities-list">
            {content.activities.map((activity, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <i className="bi bi-arrow-right-circle text-primary me-2"></i>
                {activity}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      );
    }

    // Services
    if (content.services) {
      leftColumn.push(
        <motion.div
          key="services"
          className="content-block mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h5 className="content-subtitle h6 fw-semibold mb-3">Services</h5>
          <ul className="content-list services-list">
            {content.services.map((service, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <i className="bi bi-gear-fill text-primary me-2"></i>
                {service}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      );
    }

    // Preparations
    if (content.preparations) {
      leftColumn.push(
        <motion.div
          key="preparations"
          className="content-block mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h5 className="content-subtitle h6 fw-semibold mb-3">
            What We Prepare
          </h5>
          <ul className="content-list preparations-list">
            {content.preparations.map((prep, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <i className="bi bi-clipboard-check text-primary me-2"></i>
                {prep}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      );
    }

    // Deliverables
    if (content.deliverables) {
      rightColumn.push(
        <motion.div
          key="deliverables"
          className="content-block mb-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h5 className="content-subtitle h6 fw-semibold mb-3">Deliverables</h5>
          <ul className="content-list deliverables-list">
            {content.deliverables.map((deliverable, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <i className="bi bi-file-earmark-text text-success me-2"></i>
                {deliverable}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      );
    }

    // Single Stat
    if (content.stat) {
      rightColumn.push(
        <motion.div
          key="stat"
          className="content-block mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="stat-card bg-primary text-white rounded-3 p-3 text-center">
            <div className="stat-value h4 fw-bold mb-1">
              {content.stat.value}
            </div>
            <div className="stat-description small">
              {content.stat.description}
            </div>
          </div>
        </motion.div>
      );
    }

    // Multiple Stats
    if (content.stats) {
      rightColumn.push(
        <motion.div
          key="stats"
          className="content-block mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h5 className="content-subtitle h6 fw-semibold mb-3">
            Quick Reality Checks
          </h5>
          <div className="stats-grid">
            {content.stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item bg-light rounded-3 p-3 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="stat-value h5 fw-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="stat-label small text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      );
    }

    // Additional content
    const additionalContent = [];
    if (content.calculation) {
      additionalContent.push(
        <motion.div
          key="calculation"
          className="content-block calculation-block bg-info bg-opacity-10 rounded-3 p-3 mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h6 className="fw-semibold mb-2">Financial Impact</h6>
          <p className="mb-0 small text-muted">{content.calculation}</p>
        </motion.div>
      );
    }

    if (content.risk) {
      additionalContent.push(
        <motion.div
          key="risk"
          className="content-block risk-block bg-warning bg-opacity-10 rounded-3 p-3 mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h6 className="fw-semibold mb-2">Risk Management</h6>
          <p className="mb-0 small text-muted">{content.risk}</p>
        </motion.div>
      );
    }

    if (content.benefit) {
      additionalContent.push(
        <motion.div
          key="benefit"
          className="content-block benefit-block bg-success bg-opacity-10 rounded-3 p-3 mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h6 className="fw-semibold mb-2">Strategic Advantage</h6>
          <p className="mb-0 small text-muted">{content.benefit}</p>
        </motion.div>
      );
    }

    if (content.example) {
      additionalContent.push(
        <motion.div
          key="example"
          className="content-block example-block bg-light rounded-3 p-3 mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h6 className="fw-semibold mb-2">Practical Example</h6>
          <p className="mb-0 small text-muted">{content.example}</p>
        </motion.div>
      );
    }

    if (content.cta) {
      additionalContent.push(
        <motion.div
          key="cta"
          className="content-block cta-block text-center mt-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <a href={content.cta.link} className="btn btn-primary">
            {content.cta.text}
          </a>
        </motion.div>
      );
    }

    return (
      <>
        {blocks}
        {(leftColumn.length > 0 || rightColumn.length > 0) && (
          <div className="content-grid">
            <div className="content-column">{leftColumn}</div>
            <div className="content-column">{rightColumn}</div>
          </div>
        )}
        {additionalContent.length > 0 && (
          <div className="additional-content">{additionalContent}</div>
        )}
      </>
    );
  }, [content]);

  return <div className="step-content">{renderContentBlocks}</div>;
});

RenderStepContent.displayName = "RenderStepContent";

const AccountingProcess = memo(
  ({
    title = "Our Comprehensive Accounting Framework",
    subtitle = "A systematic approach to property accounting that delivers accuracy, transparency, and peace of mind",
    steps = processSteps,
  }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [openMobileItem, setOpenMobileItem] = useState(null);

    const currentStep = steps[activeStep];

    // Memoized navigation for desktop
    const stepNavigation = useMemo(
      () =>
        steps.map((step, index) => (
          <motion.button
            key={step.id}
            className={`process-nav-item ${
              activeStep === index ? "active" : ""
            }`}
            onClick={() => setActiveStep(index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <div className="nav-icon">
              <i className={`bi ${step.icon}`}></i>
            </div>
            <div className="nav-content">
              <span className="nav-title">{step.title}</span>
              {step.subtitle && (
                <span className="nav-subtitle">{step.subtitle}</span>
              )}
            </div>
            <div className="nav-indicator"></div>
          </motion.button>
        )),
      [activeStep, steps]
    );

    // Memoized mobile accordion
    const mobileAccordionItems = useMemo(
      () =>
        steps.map((step, index) => (
          <motion.div
            key={step.id}
            className={`mobile-accordion-item ${
              openMobileItem === index ? "open" : ""
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <button
              className="accordion-header"
              onClick={() =>
                setOpenMobileItem(openMobileItem === index ? null : index)
              }
            >
              <div className="header-content">
                <div className="step-icon-wrapper bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                  <i className={`bi ${step.icon} fs-5`}></i>
                </div>
                <div className="header-text">
                  <h4 className="accordion-title mb-1">{step.title}</h4>
                  {step.subtitle && (
                    <p className="accordion-subtitle mb-0 text-muted">
                      {step.subtitle}
                    </p>
                  )}
                </div>
              </div>
              <div className="accordion-arrow">
                <i
                  className={`bi bi-chevron-down ${
                    openMobileItem === index ? "rotated" : ""
                  }`}
                ></i>
              </div>
            </button>

            <AnimatePresence>
              {openMobileItem === index && (
                <motion.div
                  className="accordion-content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="content-inner p-3">
                    <RenderStepContent content={step.content} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )),
      [openMobileItem, steps]
    );

    return (
      <section className="accounting-process-section py-5 bg-white">
        <Container>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="section-title display-6 fw-bold mb-3">{title}</h2>
            <p
              className="section-subtitle text-muted fs-5 mx-auto"
              style={{ maxWidth: "600px" }}
            >
              {subtitle}
            </p>
          </motion.div>

          {/* Desktop Layout */}
          <div className="d-none d-lg-block">
            <Row>
              <Col lg={4}>
                <motion.div
                  className="process-navigation bg-light rounded-3 shadow-sm p-4 sticky-top"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="h5 fw-bold mb-4 text-primary">
                    Accounting Process
                  </h3>
                  <div className="nav-items">{stepNavigation}</div>
                </motion.div>
              </Col>

              <Col lg={8}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="process-content"
                  >
                    <div className="content-header bg-primary text-white rounded-3 p-4 p-lg-5 mb-4">
                      <div>
                        <h3 className="h2 fw-bold mb-2">{currentStep.title}</h3>
                        {currentStep.subtitle && (
                          <p className="fs-5 mb-0 opacity-75">
                            {currentStep.subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                    <RenderStepContent content={currentStep.content} />
                  </motion.div>
                </AnimatePresence>
              </Col>
            </Row>
          </div>

          {/* Mobile Accordion */}
          <div className="d-lg-none">
            <div className="mobile-accordion">{mobileAccordionItems}</div>
          </div>
        </Container>
      </section>
    );
  }
);

AccountingProcess.displayName = "AccountingProcess";
export default AccountingProcess;
