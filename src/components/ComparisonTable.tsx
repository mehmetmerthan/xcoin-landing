import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function ComparisonSection() {
  const successRateData = [
    { name: "Startups", success: 10, failure: 90 },
    { name: "M&A", success: 80, failure: 20 },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          M&A vs Startups: A Comprehensive Comparison
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-muted/50 border-gray-700/50">
            <CardHeader>
              <CardTitle>Success Rates</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={successRateData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="success"
                    fill="#4CAF50"
                    name="Success Rate (%)"
                  />
                  <Bar
                    dataKey="failure"
                    fill="#F44336"
                    name="Failure Rate (%)"
                  />
                </BarChart>
              </ResponsiveContainer>
              <p className="mt-4 text-sm text-gray-400">
                M&A success rates (70-90%) significantly outperform startup
                success rates (10%).
              </p>
            </CardContent>
          </Card>

          <Card className="bg-muted/50 border-gray-700/50">
            <CardHeader>
              <CardTitle>Revenue Generation Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center h-48">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400">0</div>
                  <div className="mt-2 text-gray-300">Years</div>
                  <div className="mt-1 text-sm text-gray-400">
                    M&A: Immediate Revenue
                  </div>
                </div>
                <div className="border-t-2 border-gray-300 flex-grow mx-4"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600">3-5</div>
                  <div className="mt-2">Years</div>
                  <div className="mt-1 text-sm">Startups: Time to Revenue</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-400">
                M&A deals often achieve ROI within 2-3 years, while less than
                30% of startups achieve profitability by their fifth year.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-muted/50 border-gray-700/50 mb-12">
          <CardHeader>
            <CardTitle>Risk Factors</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-gray-700/50">
                  <TableHead className="text-gray-300">M&A Risks</TableHead>
                  <TableHead className="text-gray-300">Startup Risks</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-gray-700/50">
                  <TableCell className="text-gray-300">
                    Poor integration planning (30% of failures)
                  </TableCell>
                  <TableCell className="text-gray-300">
                    Lack of product-market fit (42% of failures)
                  </TableCell>
                </TableRow>
                <TableRow className="border-gray-700/50">
                  <TableCell className="text-gray-300">
                    Overpayment risk
                  </TableCell>
                  <TableCell className="text-gray-300">
                    Cash flow issues (29% of failures)
                  </TableCell>
                </TableRow>
                <TableRow className="border-gray-700/50">
                  <TableCell className="text-gray-300">
                    Solution: Proper due diligence and integration strategies
                  </TableCell>
                  <TableCell className="text-gray-300">
                    High market competition (19% of failures)
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="mt-4 text-sm text-gray-400">
              M&A risks can be significantly mitigated with strategic planning,
              while startup risks are inherently higher and more difficult to
              control.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-muted/50 border-gray-700/50">
            <CardHeader>
              <CardTitle>Profitability and ROI</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-around items-center h-48">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400">80%</div>
                  <div className="mt-2 text-gray-300">M&A</div>
                  <div className="mt-1 text-sm text-gray-400">
                    Higher profitability within 2 years
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600">90%</div>
                  <div className="mt-2">Startups</div>
                  <div className="mt-1 text-sm">Never achieve positive ROI</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-400">
                M&A deals typically achieve 15-25% ROI annually, while most
                startups struggle to provide returns to investors.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-muted/50 border-gray-700/50">
            <CardHeader>
              <CardTitle>Cost Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700/50">
                    <TableHead className="text-gray-300">M&A</TableHead>
                    <TableHead className="text-gray-300">Startups</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-gray-700/50">
                    <TableCell className="text-gray-300">
                      10-20% operational expense savings
                    </TableCell>
                    <TableCell className="text-gray-300">
                      High upfront costs
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-gray-700/50">
                    <TableCell className="text-gray-300">
                      Cross-selling opportunities
                    </TableCell>
                    <TableCell className="text-gray-300">
                      High cash burn rates
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-gray-700/50">
                    <TableCell className="text-gray-300">
                      Expanded market access
                    </TableCell>
                    <TableCell className="text-gray-300">
                      Risk of early failure
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <p className="mt-4 text-sm text-gray-400">
                M&A offers cost synergies and value creation opportunities,
                while startups face high initial investments and burn rates.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-muted/50 border-gray-700/50">
          <CardHeader>
            <CardTitle>Key Takeaways</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-gray-700/50">
                  <TableHead className="text-gray-300">Feature</TableHead>
                  <TableHead className="text-gray-300">M&A</TableHead>
                  <TableHead className="text-gray-300">Startups</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-gray-700/50">
                  <TableCell className="text-gray-300">Success Rate</TableCell>
                  <TableCell className="text-green-400">70-90%</TableCell>
                  <TableCell className="text-red-400">10%</TableCell>
                </TableRow>
                <TableRow className="border-gray-700/50">
                  <TableCell className="text-gray-300">
                    Time to Revenue
                  </TableCell>
                  <TableCell className="text-green-400">
                    Immediate (0 years)
                  </TableCell>
                  <TableCell className="text-red-400">3-5 years</TableCell>
                </TableRow>
                <TableRow className="border-gray-700/50">
                  <TableCell className="text-gray-300">Risk Factors</TableCell>
                  <TableCell className="text-green-400">Manageable</TableCell>
                  <TableCell className="text-red-400">High</TableCell>
                </TableRow>
                <TableRow className="border-gray-700/50">
                  <TableCell className="text-gray-300">Average ROI</TableCell>
                  <TableCell className="text-green-400">15-25%</TableCell>
                  <TableCell className="text-red-400">
                    Rarely positive
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="mt-4 text-sm text-gray-400">
              <p className="font-semibold">
                M&A Outperforms Startups in Risk-Adjusted Returns:
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>
                  M&A provides a more stable and predictable path to
                  profitability with immediate revenue and lower failure rates.
                </li>
                <li>
                  Startups are high-risk, high-reward, but the odds are stacked
                  against investors.
                </li>
              </ul>
              <p className="font-semibold mt-4">
                Diversification Potential in M&A:
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>
                  Acquiring companies across different industries minimizes
                  risks further.
                </li>
                <li>
                  Example: Tech, healthcare, and retail acquisitions
                  collectively reduce market-specific volatility.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
