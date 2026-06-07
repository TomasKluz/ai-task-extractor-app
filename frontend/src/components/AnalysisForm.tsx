import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

function AnalysisForm() {
    return (
        <div>
        <Textarea placeholder="Enter text for analysis..." />
        <Button className="mt-4 border border-slate-600 bg-slate-900 hover:bg-slate-700 cursor-pointer">Analyze</Button>
        </div>
    )
}

export default AnalysisForm