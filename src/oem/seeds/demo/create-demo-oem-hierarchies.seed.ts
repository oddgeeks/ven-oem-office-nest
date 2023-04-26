import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { OemHierarchyEntity } from '../../main/oem-hierarchies/oem-hierarchy.entity';
import { seedEntities } from '../../../utils/seed-factory.util';

export default ({ companyId = 1 }: { companyId?: number }) =>
  class CreateDemoOemHierarchies implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
      const hierarchies: Partial<OemHierarchyEntity>[] = [
        {
          hierarchyLevelId: 1,
          companyId,
          parentId: 1,
          hierarchyName: 'North America',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 2,
          companyId,
          parentId: 1,
          hierarchyName: 'USA',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 3,
          companyId,
          parentId: 2,
          hierarchyName: 'Central',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 4,
          companyId,
          parentId: 3,
          hierarchyName: 'New York',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 4,
          companyId,
          parentId: 4,
          hierarchyName: 'Ohio',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 9,
          companyId,
          parentId: 1,
          hierarchyName: 'Standard',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 5,
          companyId,
          parentId: 1,
          hierarchyName: 'District',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 6,
          companyId,
          parentId: 1,
          hierarchyName: 'Geo LV-6',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 7,
          companyId,
          parentId: 1,
          hierarchyName: 'Geo LV-7',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 8,
          companyId,
          parentId: 1,
          hierarchyName: 'Geo LV-8',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 1,
          companyId,
          parentId: 1,
          hierarchyName: 'Europe',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 3,
          companyId,
          parentId: 12,
          hierarchyName: 'England',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 2,
          companyId,
          parentId: 11,
          hierarchyName: 'Ukraine',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 3,
          companyId,
          parentId: 13,
          hierarchyName: 'Ukraine',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 2,
          companyId,
          parentId: 11,
          hierarchyName: 'UK',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 4,
          companyId,
          parentId: 14,
          hierarchyName: 'London',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 4,
          companyId,
          parentId: 15,
          hierarchyName: 'Kyiv',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 1,
          companyId,
          parentId: 1,
          hierarchyName: 'Asia',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 2,
          companyId,
          parentId: 18,
          hierarchyName: 'China',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 3,
          companyId,
          parentId: 19,
          hierarchyName: 'Province',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 4,
          companyId,
          parentId: 20,
          hierarchyName: 'Shanghai',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 10,
          companyId,
          parentId: 131,
          hierarchyName: 'SaaS',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 137,
          hierarchyName: 'Standard',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 134,
          hierarchyName: 'Servers',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 143,
          hierarchyName: '7500',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 46,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 135,
          hierarchyName: 'HR Software',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 10,
          companyId,
          parentId: 44,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 52,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 56,
          hierarchyName: 'Add-On',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 53,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 45,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 45,
          hierarchyName: 'Subscription',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 63,
          hierarchyName: 'Add-On',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 56,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 52,
          hierarchyName: 'Subscription',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 10,
          companyId,
          parentId: 44,
          hierarchyName: 'Virtual',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 68,
          hierarchyName: 'Add-On',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 10,
          companyId,
          parentId: 66,
          hierarchyName: 'On-Prem',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 67,
          hierarchyName: 'Subscription',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 75,
          hierarchyName: 'Add-On',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 74,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 71,
          hierarchyName: 'Add-On',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 78,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 75,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 78,
          hierarchyName: 'Add-On',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 82,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 81,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 3,
          companyId,
          parentId: 2,
          hierarchyName: 'East',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 10,
          companyId,
          parentId: 66,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 67,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 71,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 10,
          companyId,
          parentId: 66,
          hierarchyName: 'Virtual',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 74,
          hierarchyName: 'Subscription',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 68,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 81,
          hierarchyName: 'Subscription',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 10,
          companyId,
          parentId: 131,
          hierarchyName: 'Hardware',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 10,
          companyId,
          parentId: 131,
          hierarchyName: 'OnPremise',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 10,
          companyId,
          parentId: 131,
          hierarchyName: 'Services',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 137,
          hierarchyName: 'Premium',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 134,
          hierarchyName: 'Monitors',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 144,
          hierarchyName: '25"',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 144,
          hierarchyName: '36"',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 136,
          hierarchyName: 'Consulting Services',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 13,
          companyId,
          parentId: 1,
          hierarchyName: 'Product LV-5',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 14,
          companyId,
          parentId: 1,
          hierarchyName: 'Product LV-6',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 15,
          companyId,
          parentId: 1,
          hierarchyName: 'Product LV-7',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 16,
          companyId,
          parentId: 1,
          hierarchyName: 'Product LV-8',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 2,
          companyId,
          parentId: 1,
          hierarchyName: 'Canada',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 3,
          companyId,
          parentId: 2,
          hierarchyName: 'West',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 3,
          companyId,
          parentId: 114,
          hierarchyName: 'East',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 3,
          companyId,
          parentId: 114,
          hierarchyName: 'Central',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 3,
          companyId,
          parentId: 114,
          hierarchyName: 'West',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 2,
          companyId,
          parentId: 11,
          hierarchyName: 'Germany',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 2,
          companyId,
          parentId: 11,
          hierarchyName: 'France',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 2,
          companyId,
          parentId: 18,
          hierarchyName: 'Japan',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 4,
          companyId,
          parentId: 122,
          hierarchyName: 'Edinburgh',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 3,
          companyId,
          parentId: 119,
          hierarchyName: 'Germany',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 3,
          companyId,
          parentId: 120,
          hierarchyName: 'France',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 3,
          companyId,
          parentId: 12,
          hierarchyName: 'Scotland',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 4,
          companyId,
          parentId: 124,
          hierarchyName: 'Paris',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 4,
          companyId,
          parentId: 115,
          hierarchyName: 'San Francisco',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 4,
          companyId,
          parentId: 116,
          hierarchyName: 'Montreal',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 4,
          companyId,
          parentId: 117,
          hierarchyName: 'Toronto',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 4,
          companyId,
          parentId: 118,
          hierarchyName: 'Vancouver',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 41,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 10,
          companyId,
          parentId: 22,
          hierarchyName: 'On-Prem',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 23,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 37,
          hierarchyName: 'Subscription',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 31,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 41,
          hierarchyName: 'Add-On',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 23,
          hierarchyName: 'Subscription',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 31,
          hierarchyName: 'Add-On',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 34,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 27,
          hierarchyName: 'Add-On',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 34,
          hierarchyName: 'Add-On',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 27,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 38,
          hierarchyName: 'Add-On',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 30,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 10,
          companyId,
          parentId: 22,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 38,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 24,
          hierarchyName: 'Add-On',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 24,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 10,
          companyId,
          parentId: 22,
          hierarchyName: 'Virtual',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 37,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 30,
          hierarchyName: 'Subscription',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 9,
          companyId,
          parentId: 1,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 53,
          hierarchyName: 'Add-On',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 63,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 60,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 10,
          companyId,
          parentId: 44,
          hierarchyName: 'On-Prem',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 60,
          hierarchyName: 'Add-On',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 59,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 59,
          hierarchyName: 'Subscription',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 49,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 49,
          hierarchyName: 'Add-On',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 46,
          hierarchyName: 'Add-On',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 85,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 82,
          hierarchyName: 'Add-On',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 85,
          hierarchyName: 'Add-On',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 9,
          companyId,
          parentId: 1,
          hierarchyName: 'Premium',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 107,
          hierarchyName: 'Add-On',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 93,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 103,
          hierarchyName: 'Subscription',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 107,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 10,
          companyId,
          parentId: 88,
          hierarchyName: 'On-Prem',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 9,
          companyId,
          parentId: 1,
          hierarchyName: 'Upgrade',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 89,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 100,
          hierarchyName: 'Add-On',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 103,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 97,
          hierarchyName: 'Add-On',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 104,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 96,
          hierarchyName: 'Subscription',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 90,
          hierarchyName: 'Add-On',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 93,
          hierarchyName: 'Add-On',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 10,
          companyId,
          parentId: 88,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 104,
          hierarchyName: 'Add-On',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 89,
          hierarchyName: 'Subscription',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 96,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 10,
          companyId,
          parentId: 88,
          hierarchyName: 'Virtual',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 100,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 97,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 90,
          hierarchyName: 'None',
          isEnabled: false,
          isActive: true,
        },
        {
          hierarchyLevelId: 9,
          companyId,
          parentId: 1,
          hierarchyName: 'Standalone',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 9,
          companyId,
          parentId: 1,
          hierarchyName: 'Bundles',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 133,
          hierarchyName: 'Finance Software',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 133,
          hierarchyName: 'HR Software',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 138,
          hierarchyName: 'Standard',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 138,
          hierarchyName: 'Premium',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 143,
          hierarchyName: '5500',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 11,
          companyId,
          parentId: 135,
          hierarchyName: 'Finance Software',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 151,
          hierarchyName: 'Hourly Services',
          isEnabled: true,
          isActive: true,
        },
        {
          hierarchyLevelId: 12,
          companyId,
          parentId: 151,
          hierarchyName: 'Consumption Services',
          isEnabled: true,
          isActive: true,
        },
      ];

      const hierarchyEntities = await seedEntities(
        connection,
        OemHierarchyEntity,
        hierarchies,
      );

      return hierarchyEntities;
    }
  };