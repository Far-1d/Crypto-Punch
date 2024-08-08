import {
    RxArrowDown ,
    RxArrowUp ,
    RxCaretSort ,
  } from "react-icons/rx"
  import { Column } from "@tanstack/react-table"
  
  import { cn } from "@/lib/utils"
  import { Button } from "@/components/shadcn/button"
  import {
    DropdownMenu,
    DropdownMenuTrigger,
  } from "@/components/shadcn/dropdown-menu"
  
  interface DataTableColumnHeaderProps<TData, TValue>
    extends React.HTMLAttributes<HTMLDivElement> {
    column: Column<TData, TValue>
    title: string
  }
  
  export function DataTableColumnHeader<TData, TValue>({
    column,
    title,
    className,
  }: DataTableColumnHeaderProps<TData, TValue>) {
    if (!column.getCanSort()) {
      return <div className={cn(className)}>{title}</div>
    }
  
    return (
      <div className={cn("flex items-center space-x-2", className)}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="-ml-3 h-8 data-[state=open]:bg-accent"
              onClick={() => column.toggleSorting(
                column.getIsSorted() === "desc" ? false : true
              )}
            >
              <span>{title}</span>
              {column.getIsSorted() === "desc" ? (
                <RxArrowDown  className="ml-2 h-4 w-4" />
              ) : column.getIsSorted() === "asc" ? (
                <RxArrowUp  className="ml-2 h-4 w-4" />
              ) : (
                <RxCaretSort  className="ml-2 h-4 w-4" />
              )}
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </div>
    )
  }