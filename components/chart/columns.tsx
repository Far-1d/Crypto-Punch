"use client"

import { ColumnDef } from "@tanstack/react-table"

import Image from "next/image"
import { Checkbox } from "@/components/shadcn/checkbox"

import { bugs } from "@/data/data"
import { Task } from "@/data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"
import { FaArrowTrendDown, FaArrowTrendUp  } from "react-icons/fa6";
import { cn } from "@/lib/utils"

export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className=""
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Row" />
    ),
    cell: ({ row }) => <div className="w-[60px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Coin" />
    ),
    cell: ({ row }) => {
      const img:string = row.getValue("icon"); 
      return (
        <div className="flex space-x-1 items-center justify-start">
          <Image src={row.getValue("icon")} height={20} width={20} alt="" className="h-10 w-10 border-0"/>
          <span className="max-w-[400px] truncate font-medium">
            {row.getValue("name")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
    cell: ({ row }) => {
      const price = bugs.find((bug) => bug.value === row.original.name)

      return (
        <div className="flex w-[100px] items-center">
          <span>{row.getValue("price")}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: "dailyChange",
    accessorKey: "Change (24h)",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Change (24h)" />
    ),
    cell: ({ row }) => {
      const trend:number = row.getValue("dailyChange");
      const icon = trend > 0 ? <FaArrowTrendUp className="mr-2 h-4 w-4 text-muted-foreground"/> : 
        <FaArrowTrendDown className="mr-2 h-4 w-4 text-muted-foreground"/>;
      const color = trend === 0 ? "" : trend > 0 ? "text-emerald-400" : "text-red-400";  
      // if (!priority) {
      //   return null
      // }

      return (
        <div className="flex items-center">
          {icon}
          <span className={cn("",color)}>{row.getValue('dailyChange')}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]