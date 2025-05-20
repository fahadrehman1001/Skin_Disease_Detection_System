
import { Button } from "@/components/ui/button";
import {
  AlertDialog as AlertDialogComponent,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface AlertDialogProps {
  open: boolean;
  onClose: () => void;
}

const AlertDialog = ({ open, onClose }: AlertDialogProps) => {
  return (
    <AlertDialogComponent open={open} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Important Note</AlertDialogTitle>
          <AlertDialogDescription>
            The scan result is not a diagnosis. Consult your doctor for an accurate assessment.
            SkinWise AI provides preliminary analysis only.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction asChild>
            <Button onClick={onClose}>I understand</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogComponent>
  );
};

export default AlertDialog;
