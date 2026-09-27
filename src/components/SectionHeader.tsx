import { colors } from '@/theme/colors';
import { fontFamily } from '@/theme/fonts';
import { typography } from '@/theme/typography';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type SectionHeaderProps = {
    title: string;
    actionText?: string;
    onTap?: () => void
};

export default function SectionHeader({
    title,
    actionText = 'View all',
    onTap,
}: SectionHeaderProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>

            {actionText && (
                <TouchableOpacity
                    style={styles.actionContainer}
                    onPress={onTap}
                    activeOpacity={0.7}
                >
                    <Text style={styles.actionText}>{actionText}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title: {
        ...typography.h2,
        fontSize: 20,
        lineHeight: 22,
        letterSpacing: -0.4,
        color: colors.textPrimary
    },

    actionContainer: {
        borderRadius: 40,
        borderWidth: 1,
        borderColor: colors.border,
        paddingHorizontal: 14,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    actionText: {
        ...typography.bodyMedium,
        lineHeight: 16,
        fontFamily: fontFamily.semiBold,
        color: colors.textPrimary
    },



});