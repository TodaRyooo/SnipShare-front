import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { ReactNode } from 'react'
import { Control, ControllerRenderProps, FieldValues, Path } from 'react-hook-form'

type CustomFormFiledProps<T extends FieldValues> = {
  control: Control<T>
  fieldName: Path<T>
  formLabel: string
  renderChildren: (filed: ControllerRenderProps<T, Path<T>>) => ReactNode
}

export const CustomFormField = <T extends FieldValues>({
  control,
  fieldName,
  formLabel,
  renderChildren,
}: CustomFormFiledProps<T>) => {
  return (
    <FormField
      control={control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>{formLabel}</FormLabel>
          <FormControl>{renderChildren(field)}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
