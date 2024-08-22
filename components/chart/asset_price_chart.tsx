import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/shadcn/chart';
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"


export const Chart = ({asset}:{asset:any}) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };

    const date1 = new Date(asset.ath_date);
    const date2 = new Date(asset.atl_date);
    let start , end, price_start, price_end, initial;
    const five = (Number(asset.ath) - Number(asset.atl))*0.05;
    const tweny = (Number(asset.ath) - Number(asset.atl))*0.2;
    const mid = (Number(asset.ath) + Number(asset.atl))/2;
    const today = new Date(asset.updated_at);
    if (date1.getTime() > date2.getTime()) {
        start = date2;
        price_start = asset.atl;
        end = date1;
        price_end = asset.ath;
        initial = Number(asset.atl) + tweny;
    }
    else{
        start = date1;
        price_start = asset.ath;
        end = date2;
        price_end = asset.atl;
        initial = Number(asset.ath) - tweny;
    }
    const sixMonthsAgo = new Date(start);
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() -6);

    
    const chartData = [
        // @ts-ignore
        { time: "",   price: mid},
        { time: "",   price: mid},
        // @ts-ignore
        { time: start.toLocaleString('en-US', options),          price: Number(price_start) },
        // @ts-ignore
        { time: end.toLocaleString('en-US', options),            price: Number(price_end) },
        // @ts-ignore
        { time: today.toLocaleString('en-US', options),          price: Number(asset.price)},
    ]

    const chartConfig = {
        price: {
            label: "Price",
            color: "hsl(var(--chart-1))",
        }
    } satisfies ChartConfig

    return (
        <ChartContainer config={chartConfig} className='z-10 absolute h-24 md:h-32 w-[48vw] md:w-[24vw] ml-24 md:ml-6'>
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 2,
                right: 2,
              }}
            >
              {/* <CartesianGrid vertical={false} /> */}
              <XAxis
                dataKey="time"
                tickLine={false}
                axisLine={false}
                tickMargin={6}
                tickFormatter={(value) => value.slice(-4)}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Line
                dataKey="price"
                type="linear"
                strokeWidth={2}
                stroke="var(--color-price)"
                dot={false}
              />
            </LineChart>
        </ChartContainer>
    )
}