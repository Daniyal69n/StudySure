import mongoose from 'mongoose';

const UniversitySchema = new mongoose.Schema({
  name: { type: String, default: '' },
  rank: { type: String, default: '' }
}, { _id: false });

const VisaStepSchema = new mongoose.Schema({
  step: { type: String, default: '' },
  description: { type: String, default: '' }
}, { _id: false });

const TuitionFeeSchema = new mongoose.Schema({
  level: { type: String, default: '' },
  range: { type: String, default: '' }
}, { _id: false });

const CostDataSchema = new mongoose.Schema({
  tuitionFees: [TuitionFeeSchema],
  intro: { type: String, default: '' },
  notes: [{ type: String }]
}, { _id: false });

const PostStudyWorkSchema = new mongoose.Schema({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  benefits: [{ type: String }]
}, { _id: false });

const WorkRightsSchema = new mongoose.Schema({
  termTime: { type: String, default: '' },
  holidays: { type: String, default: '' }
}, { _id: false });

// Optional custom section titles editable by admins
const SectionTitlesSchema = new mongoose.Schema({
  whyStudy: { type: String, default: '' },
  universities: { type: String, default: '' },
  visaProcess: { type: String, default: '' },
  costs: { type: String, default: '' },
  postStudyWork: { type: String, default: '' },
  workRights: { type: String, default: '' }
}, { _id: false });

const CountrySchema = new mongoose.Schema({
  slug: { 
    type: String, 
    required: true, 
    unique: true,
    index: true 
  },
  countryName: { type: String, required: true },
  bannerImage: { type: String },
  whyStudyReasons: [{ type: String }],
  topUniversities: [UniversitySchema],
  visaProcess: [VisaStepSchema],
  costData: CostDataSchema,
  postStudyWork: PostStudyWorkSchema,
  workRights: WorkRightsSchema,
  sectionTitles: SectionTitlesSchema
}, {
  timestamps: true
});

// Prevent re-compilation during development
export default mongoose.models.Country || mongoose.model('Country', CountrySchema);
