import { Button } from "*/components/shadcn/ui/button";
import { Calendar } from "*/components/shadcn/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "*/components/shadcn/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type DatePickerProps = {
  date: Date | null;
  setDate: Dispatch<SetStateAction<Date | null>>;
};

export function DatePicker({ date, setDate }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="shadow-none">
          {date ? format(date, "PPP") : "Pick a date"}
          <CalendarIcon className="ml-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date ?? undefined}
          onSelect={(selected) => setDate(selected ?? null)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
